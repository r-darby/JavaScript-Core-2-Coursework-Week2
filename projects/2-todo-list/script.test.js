

const path = require("path");
const { JSDOM } = require("jsdom");
const { expect } = require("@jest/globals");
const {default: userEvent} = require('@testing-library/user-event')

let page = null;

beforeEach(async () => {
  page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
    resources: "usable",
    runScripts: "dangerously",
  });

//   jest.useFakeTimers();

  // do this so students can use element.innerText which jsdom does not implement
  Object.defineProperty(page.window.HTMLElement.prototype, "innerText", {
    get() {
      return this.textContent;
    },
    set(value) {
      this.textContent = value;
    },
  });

  return new Promise((res) => {
    page.window.document.addEventListener("load", res);
  });
});

test("displays the initial list of todos",() => {

    const todoList = page.window.document.querySelector("#todo-list");
    
    expect(todoList).toHaveTextContent("Wash the dishes");
    expect(todoList).toHaveTextContent("Do the shopping");
});


test('each todo has a delete and tick icon',() => {
  const listElements = page.window.document.querySelectorAll("li");

  [...listElements].forEach((_,index) => {
    const tickIcon = page.window.document.querySelector(`li:nth-child(${index + 1}) i.fa-check`);
    const binIcon = page.window.document.querySelector(`li:nth-child(${index + 1}) i.fa-trash`);

    expect(tickIcon).toBeInTheDocument();
    expect(binIcon).toBeInTheDocument();  
  });

});

test('can add a new todo to the list',() => {

    const todoList = page.window.document.querySelector('#todo-list');
    const button = page.window.document.querySelector('.btn');
    const input = page.window.document.querySelector("#todoInput");

    userEvent.type(input,'Do CYF coursework');
    userEvent.click(button);

    expect(todoList).toHaveTextContent('Do CYF coursework');
});

test("can strike through a todo when it is completed",() => {

    /*
 <li
                class="list-group-item d-flex justify-content-between align-items-center"
s>
                Wash the dishes
                <span class="badge bg-primary rounded-pill">
                  <!-- each of these <i> tags will need an event listener when we create them in Javascript -->
                  <i class="fa fa-check" aria-hidden="true"></i>
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </span>
              </li>
    */
    const li = page.window.document.querySelector('li');
    const tickIcon = page.window.document.querySelector('li i');
    userEvent.click(tickIcon);

    expect(li).toHaveStyle({
        textDecoration: 'line-through'
    });

});

afterEach(() => {
  jest.useRealTimers();
  page = null;
});