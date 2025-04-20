import { useMemo } from "react";

interface LoadingProps {
  width?: string;
  height?: string;
}

export const LoadingOne = (props: LoadingProps) => {
  const { width: _width, height: _height } = props;

  const { width, height } = useMemo(() => {
    if (!Boolean(_width) && !Boolean(_height))
      return { width: "75px", height: "75px" };
    if (_width && !_height) return { width: _width, height: _width };
    if (!_width && _height) return { width: _height, height: _height };

    return { width: _width, height: _height };
  }, [_width, _height]);

  return (
    <div className="loader-svg">
      <div className="top">
        <svg width={width} height={height} viewBox="-4 -1 38 28">
          <polygon
            fill="transparent"
            strokeWidth="2"
            points="15,0 30,30 0,30"
          ></polygon>
        </svg>
      </div>
    </div>
  );
};
