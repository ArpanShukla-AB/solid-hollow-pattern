export const N = 5;
export const lines = [
  '#include <iostream>', 'using namespace std;', '', 'int main() {', '    int n = 5;', '', '    for (int i = 1; i <= n; i++) {', '        for (int j = 1; j <= n; j++) {', '            cout << "* ";', '        }', '        cout << endl;', '    }', '', '    return 0;', '}'
];
export const steps = (() => {
  const result = [{ line: 4, i: null, j: null, stars: 0, rows: 0, label: 'Program starts', detail: 'Execution enters main() and gets ready to build the square.' },
    { line: 5, i: null, j: null, stars: 0, rows: 0, label: 'Initialize n', detail: 'The variable n is set to 5, so the square will be 5 × 5.' }];
  for (let i = 1; i <= N; i++) {
    result.push({ line: 7, i, j: null, stars: (i - 1) * N, rows: i - 1, label: `Start row ${i}`, detail: `The outer loop begins row ${i}. The inner loop will print ${N} stars.` });
    for (let j = 1; j <= N; j++) result.push({ line: 9, i, j, stars: (i - 1) * N + j, rows: i - 1, label: `Print star ${j} of row ${i}`, detail: `cout prints a star at column ${j}, row ${i}.` });
    result.push({ line: 11, i, j: N, stars: i * N, rows: i, label: `Finish row ${i}`, detail: 'endl moves the output cursor to a new line.' });
  }
  result.push({ line: 7, i: null, j: null, stars: N * N, rows: N, label: 'Outer loop ends', detail: 'i is now 6, so the outer-loop condition is false.' });
  result.push({ line: 14, i: null, j: null, stars: N * N, rows: N, label: 'Program finishes', detail: 'main() returns 0. The 5 × 5 solid square is complete.' });
  return result;
})();
export function getOutput(starCount) {
  return Array.from({ length: starCount }, (_, k) => k % N === N - 1 ? '*\n' : '* ').join('');
}
