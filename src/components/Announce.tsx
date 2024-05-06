'use client';

import React, { useEffect, useState } from 'react';

interface Announces {
  success: string;
  data: Array<AnnouceData>;
}

interface AnnouceData {
  annouce_id: number;
  category_name: string;
  type: string;
  display_massage: string;
  created_time: string;
}
export default function Announce() {
  const [annouce, setAnnounce] = useState<Announces>();

  const getRoomRecommend = async () => {
    const response = await fetch(
      'https://pantip.com/api/forum-service/forum/get_announce?room=homepage&limit=3',
      {
        headers: {
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
        },
      },
    );
    const res = await response.json();
    setAnnounce(res);
  };

  useEffect(() => {
    getRoomRecommend();
  }, []);

  return (
    <div>
      {annouce?.success ? (
        <ul>
          {annouce.data?.map((item: any) => (
            <li
              key={item}
              className="flex gap-x-2 py-2 pl-4 text-white "
              style={{ borderBottomWidth: 0.5, borderBottomColor: '#7976a0' }}
            >
              {item.category_name === 'highlight' ? (
                <h4 className="text-orange-600">Highlight</h4>
              ) : null}
              {item.category_name === 'activity' ? (
                <h4 className="text-blue-400">Activity</h4>
              ) : null}
              <div
                className="pr-4"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: item.display_message }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="grid h-20 place-content-center">
          <p className="text-white">Loading...</p>
        </div>
      )}
    </div>
  );
}
