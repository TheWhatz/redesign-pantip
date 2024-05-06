import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};
export default function Box(props: Props) {
  return (
    <div
      className="rounded-lg"
      style={{ borderWidth: 1, borderColor: '#7976a0' }}
    >
      <div
        className="rounded-t-lg py-2 pl-4 text-white"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#7976a0',
          backgroundColor: '#1F1D33',
        }}
      >
        <div className="text-yellow-500">{props.title}</div>
      </div>
      <div className="rounded-b-lg" style={{ backgroundColor: '#353156' }}>
        {props.children}
      </div>
    </div>
  );
}
