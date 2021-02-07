import Header from './Header';

export default function Page({children, cool}) {
  return <div>
    <Header></Header>
    <h1>I am page</h1>
    {children}
  </div>
}
