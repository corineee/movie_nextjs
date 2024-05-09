export const metadata = {
  title: "About us",
}

export default function AboutUs() {
  //아래와 같이 컴포넌트 파일을 불러올 수 있다.
  //return <h1>AboutUs! <Avatar /></h1>
  return (
    <div>
      {/* Navigation을 layout에서 생성하여 코드의 반복성을 줄인다. */}
      {/* <Navigation /> */}
      <h1>About us!</h1>
    </div>
  );
}
