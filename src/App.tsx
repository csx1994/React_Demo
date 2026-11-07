import { useState } from 'react';

// 这是一个 React 组件；tsx 表示可以在 TypeScript 中编写 JSX。
export default function App() {
  // number 和 string 是 TypeScript 类型，帮助我们检查数据是否用对。
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');

  return (
    <div className="page">
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-icon">R</span> 前端小实验</a>
        <span className="lesson">实验 01 <span>/</span> 交互入门</span>
      </header>
      <main>
        <div className="eyebrow"><span /> REACT + TYPESCRIPT</div>
        <h1>我的第一个<br /><span>React 页面。</span></h1>
        <p className="intro">从一个小小的点击开始，看看数据如何变成看得见的变化。</p>

        <section className="playground" aria-labelledby="demo-title">
          <div className="demo-head"><span className="section-label">动手试一试</span><span className="live"><i /> 实时响应</span></div>
          <div className="demo-grid">
            <div className="greeting">
              <label htmlFor="name">先告诉我你的名字</label>
              <input id="name" type="text" placeholder="比如：小明" maxLength={30} value={name} onChange={(event) => setName(event.target.value)} autoComplete="off" />
              <h2 id="demo-title">你好，{name.trim() || '新朋友'} <span className="wave" aria-hidden="true">✳</span></h2>
              <p>输入名字，问候语会跟着改变。<br />喜欢这个小实验？给它点个赞吧。</p>
              <div className="actions">
                {/* 修改状态后，React 会自动更新使用了这个状态的界面。 */}
                <button className="primary" onClick={() => setCount((previous) => previous + 1)}><span aria-hidden="true">♡</span> 点个赞</button>
                <button className="reset" disabled={count === 0} onClick={() => setCount(0)}>重置计数 <span aria-hidden="true">↺</span></button>
              </div>
            </div>
            <div className="counter" aria-live="polite" aria-atomic="true">
              <span className="counter-label">收集到的喜欢</span>
              <strong>{count.toString().padStart(2, '0')}</strong>
              <span className="counter-caption">{count === 0 ? '每一次点击，都是一次变化' : `谢谢你的 ${count} 次喜欢！`}</span>
              <div className="counter-decoration" aria-hidden="true">✳</div>
            </div>
          </div>
          <div className="demo-foot"><span aria-hidden="true">↳</span> 不需要刷新页面，变化就发生了。<span className="memory">刷新后恢复初始状态</span></div>
        </section>

        <section className="explanation" aria-labelledby="behind-title">
          <div className="section-heading"><h2 id="behind-title">这一页，是怎么组成的？</h2><span>三个角色，一起工作</span></div>
          <div className="cards">
            <article><span className="card-number">01 / 结构与交互</span><h3>React <code>.tsx</code></h3><p>把页面拆成组件，管理名字和点赞数。数据变化时，自动更新界面。</p><div className="file">↗ App.tsx</div></article>
            <article><span className="card-number">02 / 类型检查</span><h3>TypeScript <code>TS</code></h3><p>名字是字符串，点赞数是数字。在开发时帮你发现类型错误。</p><div className="file">count: number</div></article>
            <article><span className="card-number">03 / 页面样式</span><h3>CSS <code>.css</code></h3><p>决定颜色、字体、间距和布局，让同一个组件呈现不同的样子。</p><div className="file">↗ style.css</div></article>
          </div>
        </section>
        <div className="flow"><span>源码 <b>React + TypeScript</b></span><span aria-hidden="true">→</span><span>构建 <b>JavaScript + CSS</b></span><span aria-hidden="true">→</span><span>浏览器 <b>加载 HTML，运行 JS，更新 DOM</b></span></div>
      </main>
      <footer><span>小实验，大进步。</span><span>Built with React & TypeScript <span aria-hidden="true">↗</span></span></footer>
    </div>
  );
}
