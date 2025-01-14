import { AiOutlineLoading } from "react-icons/ai";

export default function Loading({ width, height }: { width?: string, height?: string }) {
  return (
    <div style={{ width: width ?? '1rem', height: height ?? '1rem' }}>
      <style>
        {`
          @keyframes loading-animation {
            0%{ transform:rotate(0);}
            100%{ transform:rotate(360deg); }
          }
        `}
      </style>
      <AiOutlineLoading style={{ animation: '1s linear infinite loading-animation', width: "inherit", height: "inherit" }} />
    </div>
  );
}
