import React from 'react';

const getRoomRecommend = async () => {
  const response = await fetch(
    'https://pantip.com/api/forum-service/home/get_room_recommend?tracking_code={s84t2u22jfs4AcwxzC8DY}&',
    {
      headers: {
        ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
      },
    },
  );
  const data = await response.json();
  return data;
};
const data = await getRoomRecommend();

export default function RoomRecommend() {
  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
