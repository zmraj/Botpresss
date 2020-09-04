import assert from 'assert'
import _ from 'lodash'
import seedrandom from 'seedrandom'

import { Data } from '../typings'

export default function(dataset: Data[], k = 5): SplittedDataSet[] {
  const kFold = Math.min(dataset.length, k)
  const n = dataset.length
  assert(n >= kFold, 'kFold parameter must be <= n')
  if (kFold === 1) {
    return [
      {
        train: dataset,
        test: dataset
      }
    ]
  }
  const nTestSample = Math.floor(n / kFold)
  let available_test_samples = [...dataset]
  const res: SplittedDataSet[] = []

  let lo = _
  const randomSeed = parseInt(process.env.NLU_SEED || '')
  if (randomSeed) {
    seedrandom(`${randomSeed}`, { global: true })
    lo = _.runInContext()
  }

  for (let i = 0; i < kFold; i++) {
    const test_set = lo(available_test_samples)
      .shuffle()
      .take(nTestSample)
      .value()

    available_test_samples = lo.remove(available_test_samples, el => test_set.includes(el))
    const train_set = lo.difference(dataset, test_set)
    res.push({
      test: test_set,
      train: train_set
    })
  }

  if (randomSeed) {
    // cancel back the random seed
    seedrandom(`${new Date().getMilliseconds()}`, { global: true })
  }

  return res
}

export function getMinKFold(dataset: Data[]) {
  const n = dataset.length
  const { occurence } = getMostRepresentedClass(dataset)

  const nTestSample = Math.ceil((n + 1) / (n - occurence))
  return nTestSample
}

function getMostRepresentedClass(dataset: Data[]) {
  const uniqLabels = _(dataset)
    .map(s => s[1])
    .uniq()
    .value()

  const nSamplesPerLabel = uniqLabels.reduce((o, l) => ({ ...o, [l]: 0 }), {} as { [key: number]: number })
  for (const s of dataset) {
    nSamplesPerLabel[s[1]]++
  }

  const mostRepresentedClass = _(nSamplesPerLabel)
    .toPairs()
    .maxBy(p => p[1])

  const [label, occurence] = mostRepresentedClass as [string, number]

  return {
    label,
    occurence
  }
}

class SplitDataSetError extends Error {
  constructor(msg: string) {
    super(msg)
    super.name = 'SplitDataSetError'
  }
}

type SplittedDataSet = {
  train: Data[]
  test: Data[]
}