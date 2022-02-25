export const propagationChildVariants = ({ isLeft }: { isLeft: boolean }) => ({
  hidden: {
    opacity: 0,
    x: isLeft ? -100 : 100,
  },
  show: {
    opacity: 1,
    x: 0,
  },
});
