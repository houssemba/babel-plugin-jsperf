module.exports = function testPlugin(babel) {
  const { types: t } = babel

  const timerCallee = t.memberExpression(
    t.identifier('console'),
    t.identifier('timer'),
    false
  )

  const timerEndCallee = t.memberExpression(
    t.identifier('console'),
    t.identifier('timerEnd'),
    false
  )

  function createTimerStatement(callee, thing) {
    return t.callExpression(
      callee,
      thing.name ? [t.stringLiteral(`${thing.name}: `), thing] : [thing]
    )
  }

  return {
    visitor: {
    }
  };
};
