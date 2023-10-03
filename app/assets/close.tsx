type Props = {
  color: string;
};

const Close = ({ color }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
      <path
        d="M522.612 78.071a34.91 34.91 0 0 0-49.385 0l-172.8 172.8-172.8-172.8A34.91 34.91 0 1 0 78.29 127.41l172.8 172.8-172.8 172.8a34.91 34.91 0 1 0 49.338 49.385l172.8-172.8 172.8 172.8c6.82 6.82 15.756 10.217 24.67 10.217a34.91 34.91 0 0 0 24.692-59.578l-172.777-172.8 172.8-172.824a34.91 34.91 0 0 0 0-49.338"
        fill={color}
        className="transition-colors"
      />
    </svg>
  );
};

export { Close };
