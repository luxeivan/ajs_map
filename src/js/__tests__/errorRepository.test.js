import ErrorRepository from '../errorRepository';

test('ErrorRepository', () => {
  const errorRepository = new ErrorRepository();
  const result = errorRepository.translate(123);
  expect(result).toBe('первая ошибка');
});

test('ErrorRepository uknown', () => {
  const errorRepository = new ErrorRepository();
  const result = errorRepository.translate(569);
  expect(result).toBe('Unknown error');
});
