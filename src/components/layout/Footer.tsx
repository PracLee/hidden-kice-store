export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10 text-[13px] text-gray-500">
        <div className="mb-4 flex items-center gap-3 font-medium text-gray-600">
          <a href="#" className="hover:text-gray-900">회사소개</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-gray-900">이용약관</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="font-bold hover:text-gray-900">개인정보처리방침</a>
        </div>
        <p className="leading-6">
          (주)히든카이스 <span className="text-gray-300">|</span> 대표: 안영호{" "}
          <span className="text-gray-300">|</span> 사업자등록번호: 735-87-02522{" "}
          <a href="#" className="underline">(사업자정보확인)</a>
        </p>
        <p className="leading-6">
          주소: 경기도 고양시 일산서구 일현로 97-11, 56F{" "}
          <span className="text-gray-300">|</span> 통신판매업신고: 제 2024-고양일산서-1209{" "}
          <span className="text-gray-300">|</span> 이메일: Hidden_kice@naver.com
        </p>
        <p className="mt-4 text-gray-400">
          Copyright © 2026 히든카이스. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
