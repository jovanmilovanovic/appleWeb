export const animateWithGsapTimeline = (timeline,
rotationRef, rotationState, firstTarget, secondTaret,
animationProps) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    })
    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )
    timeline.to(
        secondTaret,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )
}