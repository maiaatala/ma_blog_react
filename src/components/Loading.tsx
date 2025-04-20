import { useMemo } from "react";

interface LoadingProps {
  width?: string;
  height?: string;
}

export const Loading = (props: LoadingProps) => {
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
      <div className="top-layer">
        <div className="mid">
          <svg width={width} height={height} viewBox="0 0 31 31">
            <polygon
              fill="transparent"
              strokeWidth="2"
              points="15,0 30,30 0,30"
            ></polygon>
          </svg>
        </div>
      </div>
      <div className="bottom-layer">
        <div className="top">
          <svg width={width} height={height} viewBox="0 0 31 31">
            <polygon
              fill="transparent"
              strokeWidth="2"
              points="15,0 30,30 0,30"
            ></polygon>
          </svg>
        </div>

        <div className="bot">
          <svg width={width} height={height} viewBox="0 0 31 31">
            <polygon
              fill="transparent"
              strokeWidth="2"
              points="15,0 30,30 0,30"
            ></polygon>
          </svg>
        </div>
      </div>
    </div>
  );
};
