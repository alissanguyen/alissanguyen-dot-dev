import * as React from "react";
import gsap from "gsap";
import { CursorState } from "~/types";

interface Props {}

const Cursor: React.FC<Props> = ({}) => {
  const [cursorState, setCursorState] = React.useState<CursorState>(
    CursorState.DEFAULT
  );
  const cursorRefs = React.useRef<CirclesType[]>([]);

  // reset on re-renders
  cursorRefs.current = [];

  React.useEffect(() => {
    const onMove = (event: PointerEvent) => {
      cursorRefs.current.forEach((ref) =>
        ref.moveTo(event.clientX, event.clientY)
      );
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addCircleRef = (ref: CirclesType) => {
    if (ref) {
      cursorRefs.current.push(ref);
    }
  };

  return (
    <div className="Circle__Container">
      <Circles size="sm" ref={addCircleRef} state={cursorState} delay={0} />
      <Circles size="md" ref={addCircleRef} state={cursorState} delay={0.1} />
      <Circles size="lg" ref={addCircleRef} state={cursorState} delay={0.22} />
    </div>
  );
};

export default Cursor;

interface CirclesProps {
  size: string;
  delay: number;
  state: CursorState;
  children?: JSX.Element;
}

export type CirclesType = typeof Circles & {
  moveTo: (x: number, y: number) => void;
};

const Circles = React.forwardRef((props: CirclesProps, forwardedRef) => {
  const el = React.useRef(null);
  const delay = props.delay;
  React.useImperativeHandle(
    forwardedRef,
    () => {
      // return our API
      return {
        moveTo: (x: number, y: number) => {
          gsap.to(el.current, { x, y, delay });
        },
      };
    },
    [delay]
  );

  return (
    <div className={`circle ${props.state} ${props.size}`} ref={el}>
      {props.children}
    </div>
  );
});
