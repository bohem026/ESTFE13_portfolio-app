// 사용자 입력이 존재하는 모든 컴포넌트: 'use client'
'use client';

import { createClient } from '@/utils/supabase/client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginStatus() {
  const supabase = createClient();
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    })();
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/');
    router.refresh();
  };

  if (user) {
    return (
      <li>
        <button className="btn btn-primary" onClick={handleLogout}>
          로그아웃
        </button>
      </li>
    );
  }
}
