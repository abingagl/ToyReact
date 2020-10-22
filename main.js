import { createElement, Component, render } from './toy-react'

class My extends Component {
  render() {
    return <div>
      <h1>my Component</h1>
      { this.children }
    </div>
  }
}


for (let i of [1,2,3]) {
  console.log(i);
}



render(<My id="id" class="c">
  <div>123</div>
  <span/>
  <a/>
</My>
, document.body);