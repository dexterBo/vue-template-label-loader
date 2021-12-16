const fs = require('fs');
const mockContext = require('./mock-context');
const loader = require('../index');
const store = require('../store');

it('记录vue文件中的所有的标签', async () => {
  store.clear();

  const callbackTplSpy = jest.fn();
  const context = mockContext({
    callbackSpy: callbackTplSpy,
    resourcePath: 'path/to/HelloWorld.vue',
  });
  const code = fs.readFileSync('lib/__test__/HelloWorld.vue', {
    encoding: 'utf8',
  });

  loader.call(context, code);

  expect(store.get('path/to/HelloWorld.vue')).toMatchSnapshot();
});

it('支持忽略文件', async () => {
  store.clear();

  const callbackTplSpy = jest.fn();
  const context = mockContext({
    callbackSpy: callbackTplSpy,
    resourcePath: 'path/to/HelloWorld.vue',
    exclude: ['path/to/HelloWorld.vue'],
  });
  const code = fs.readFileSync('lib/__test__/HelloWorld.vue', {
    encoding: 'utf8',
  });

  loader.call(context, code);

  expect(store.get('path/to/HelloWorld.vue')).toMatchSnapshot();
});
