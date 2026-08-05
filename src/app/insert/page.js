'use client';

import { createClient } from '@/utils/supabase/client';

export default function Insert() {
  const supabase = createClient();

  async function insertData(e) {
    e.preventDefault();
    const { error } = await supabase.from('portfolio').insert({
      title: e.target.title.value,
      content: e.target.content.value,
    });
    if (error) console.log(error);
  }

  return (
    <div className="about_content shadow">
      <h2 className="mb-3">데이터 입력</h2>
      <div className="contact_form">
        <form onSubmit={insertData}>
          <p className="field">
            <label htmlFor="title">프로젝트 이름:</label>
            <input type="text" id="title" name="title" placeholder="프로젝트 이름" required />
          </p>
          <p className="field">
            <label htmlFor="content">프로젝트 설명:</label>
            <textarea name="content" id="content" cols="30" rows="10" placeholder="프로젝트 설명" required></textarea>
          </p>
          <p className="field">
            <label htmlFor="url">프로젝트 주소:</label>
            <input type="url" id="url" name="url" placeholder="프로젝트 주소" />
          </p>
          <p className="field">
            <label htmlFor="review">프로젝트 후기:</label>
            <textarea name="review" id="review" cols="30" rows="10" placeholder="프로젝트 후기"></textarea>
          </p>
          <p className="field">
            <label htmlFor="reviewer">후기 글쓴이:</label>
            <input type="text" id="reviewer" name="reviewer" placeholder="후기 글쓴이" />
          </p>
          <p className="field">
            <label htmlFor="thumbnail">썸네일:</label>
            <input type="file" id="thumbnail" name="thumbnail" accept="image/*" />
          </p>
          <p className="submit">
            <input type="submit" className="primary-btn" value="등록" />
          </p>
        </form>
      </div>
    </div>
  );
}
