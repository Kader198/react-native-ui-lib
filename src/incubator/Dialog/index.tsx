import {isEmpty} from 'lodash';
import React, {useRef, useMemo, useCallback, useState, useImperativeHandle, forwardRef, ForwardedRef} from 'react';
import {StyleSheet, View as RNView} from 'react-native';
import hoistStatics from 'hoist-non-react-statics';
import {useAnimatedStyle, useDerivedValue} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {Spacings, Colors, BorderRadiuses} from '../../style';
import {asBaseComponent} from '../../commons/new';
import {useDidUpdate} from '../../hooks';
import View from '../../components/view';
import Modal from '../../components/modal';
import {extractAlignmentsValues} from '../../commons/modifiers';
import useHiddenLocation from '../hooks/useHiddenLocation';
import usePanGesture from '../panView/usePanGesture';
import useAnimatedTransition, {AnimatedTransitionProps, TransitionViewAnimationType} from './useAnimatedTransition';
import DialogHeader from './DialogHeader';
import {DialogProps, DialogDirections, DialogDirectionsEnum, DialogHeaderProps} from './types';
export {DialogProps, DialogDirections, DialogDirectionsEnum, DialogHeaderProps};
import useFadeView from './useFadeView';

const TRANSITION_ANIMATION_DELAY: AnimatedTransitionProps['delay'] = {enter: 100};

export interface DialogStatics {
  directions: typeof DialogDirectionsEnum;
  Header: typeof DialogHeader;
}

export interface DialogImperativeMethods {
  dismiss: () => void;
}

const Dialog = (props: DialogProps, ref: ForwardedRef<DialogImperativeMethods>) => {
  const {
    visible: propsVisibility = false,
    headerProps,
    containerStyle,
    containerProps,
    width,
    height,
    onDismiss,
    direction = DialogDirectionsEnum.DOWN,
    ignoreBackgroundPress,
    modalProps = {},
    useSafeArea,
    testID,
    children
  } = props;
  const {overlayBackgroundColor, ...otherModalProps} = modalProps;
  const initialVisibility = useRef(propsVisibility);
  const [visible, setVisible] = useState(propsVisibility);

  const directions = useMemo((): DialogDirections[] => {
    return [direction];
  }, [direction]);

  const {FadeView, hideNow, fade} = useFadeView({
    visible: initialVisibility.current,
    testID: `${testID}.overlayFadingBackground`,
    overlayBackgroundColor
  });

  const onPanViewDismiss = useCallback(() => {
    hideNow();
    setVisible(false);
    onDismiss?.();
  }, [hideNow, onDismiss, setVisible]);

  const onTransitionAnimationEnd = useCallback((type: TransitionViewAnimationType) => {
    if (type === 'exit') {
      setVisible(false);
      onDismiss?.();
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [onDismiss, setVisible]);

  const {setRef, onLayout, hiddenLocation} = useHiddenLocation<RNView>();

  const {
    translation: panTranslation,
    panGestureEvent,
    reset
  } = usePanGesture({
    directions,
    dismissible: true,
    animateToOrigin: true,
    onDismiss: onPanViewDismiss,
    hiddenLocation
  });

  const {
    animateIn,
    animateOut,
    translation: transitionTranslation,
    isMounted
  } = useAnimatedTransition({
    hiddenLocation,
    enterFrom: direction,
    exitTo: direction,
    onAnimationStart: fade,
    onAnimationEnd: onTransitionAnimationEnd,
    delay: TRANSITION_ANIMATION_DELAY
  });

  const open = useCallback(() => {
    if (!visible) {
      animateIn();
      reset();
      setVisible(true);
    }
  }, [visible, setVisible, animateIn, reset]);

  const close = useCallback(() => {
    if (visible) {
      animateOut();
    }
  }, [visible, animateOut]);

  useDidUpdate(() => {
    if (propsVisibility) {
      open();
    } else {
      close();
    }
  }, [propsVisibility]);

  const alignmentStyle = useMemo(() => {
    return {flex: 1, alignItems: 'center', ...extractAlignmentsValues(props)};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const translation = useDerivedValue(() => {
    // It seems to work without this derived value, but I think this is more correct
    return {
      x: panTranslation.x.value + transitionTranslation.x.value,
      y: panTranslation.y.value + transitionTranslation.y.value
    };
  });

  const transitionStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translation.value.x}, {translateY: translation.value.y}],
      // TODO: do we want to take the component's opacity here? - I think combining opacities is buggy
      opacity: isMounted.value ? 1 : 0
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style = useMemo(() => {
    return [
      styles.defaultDialogStyle,
      containerStyle,
      transitionStyle,
      width ? {width} : undefined,
      height ? {height} : undefined
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerStyle, width, height]);

  useImperativeHandle(ref, () => ({
    dismiss: animateOut
  }));

  const renderDialog = () => {
    return (
      <PanGestureHandler onGestureEvent={isEmpty(directions) ? undefined : panGestureEvent}>
        <View {...containerProps} reanimated style={style} onLayout={onLayout} ref={setRef} testID={testID}>
          {headerProps && <DialogHeader {...headerProps}/>}
          {children}
        </View>
      </PanGestureHandler>
    );
  };

  return (
    <Modal
      transparent
      animationType={'none'}
      {...otherModalProps}
      testID={`${testID}.modal`}
      useGestureHandlerRootView
      visible={visible}
      onBackgroundPress={ignoreBackgroundPress ? undefined : close}
      onRequestClose={ignoreBackgroundPress ? undefined : close}
      onDismiss={undefined}
    >
      {FadeView}
      <View useSafeArea={useSafeArea} pointerEvents={'box-none'} style={alignmentStyle}>
        {renderDialog()}
      </View>
    </Modal>
  );
};

Dialog.displayName = 'Incubator.Dialog';
Dialog.directions = DialogDirectionsEnum;
Dialog.Header = DialogHeader;

const _Dialog = forwardRef<DialogImperativeMethods, DialogProps>(Dialog);
hoistStatics(_Dialog, Dialog);
export default asBaseComponent<DialogProps, DialogStatics>(_Dialog);

const styles = StyleSheet.create({
  defaultDialogStyle: {
    marginBottom: Spacings.s5,
    backgroundColor: Colors.$backgroundDefault,
    maxHeight: '60%',
    width: 250,
    borderRadius: BorderRadiuses.br20,
    overflow: 'hidden'
  }
});
