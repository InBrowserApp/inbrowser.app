export const DNSRCODEs: Record<
  number,
  {
    name: string
    description: string
  }
> = {
  0: {
    name: 'NoError',
    description: 'No Error'
  },
  1: {
    name: 'FormErr',
    description: 'Format Error'
  },
  2: {
    name: 'ServFail',
    description: 'Server Failure'
  },
  3: {
    name: 'NXDomain',
    description: 'Non-Existent Domain'
  },
  4: {
    name: 'NotImp',
    description: 'Not Implemented'
  },
  5: {
    name: 'Refused',
    description: 'Query Refused'
  },
  6: {
    name: 'YXDomain',
    description: 'Name Exists when it should not'
  },
  7: {
    name: 'YXRRSet',
    description: 'RR Set Exists when it should not'
  },
  8: {
    name: 'NXRRSet',
    description: 'RR Set that should exist does not'
  },
  9: {
    name: 'NotAuth',
    description: 'Server Not Authoritative for zone'
  },
  10: {
    name: 'NotZone',
    description: 'Name not contained in zone'
  },
  11: {
    name: 'DSOTYPENI',
    description: 'DSO-TYPE Not Implemented'
  },
  16: {
    name: 'BADVERS',
    description: 'Bad OPT Version'
  },
  17: {
    name: 'BADKEY',
    description: 'Key not recognized'
  },
  18: {
    name: 'BADTIME',
    description: 'Signature out of time window'
  },
  19: {
    name: 'BADMODE',
    description: 'Bad TKEY Mode'
  },
  20: {
    name: 'BADNAME',
    description: 'Duplicate key name'
  },
  21: {
    name: 'BADALG',
    description: 'Algorithm not supported'
  },
  22: {
    name: 'BADTRUNC',
    description: 'Bad Truncation'
  },
  23: {
    name: 'BADCOOKIE',
    description: 'Bad/missing Server Cookie'
  }
}
