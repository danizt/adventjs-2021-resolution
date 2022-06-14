function createXmasTree(height) {
  var tree = ''
  for (var i = 0; i < height; i++) {
    tree += '_'.repeat(height - i - 1)
    tree += '*'.repeat(i * 2 + 1)
    tree += '_'.repeat(height - i - 1)
    tree += '\n'
  }

  var log = ''
  log += '_'.repeat(height - 1)
  log += '#'
  log += '_'.repeat(height - 1)

  tree += log + '\n' + log

  return tree
}

console.log(createXmasTree(30))
