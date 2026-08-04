// [jsconfig.json] -> "@/*": ["./src/*"]
import { createClient } from '@/utils/supabase/client';
import { Suspense } from 'react';

export default async function Page() {
  const supabase = await createClient();
  const { data: project, error } = await supabase.from('portfolio').select();
  console.log(portfolio);

  if (error) {
    console.error('연결실패', error);
    return <div>프로젝트 로드 실패</div>;
  }

  return <></>;
}
