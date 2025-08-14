import * as Comlink from 'comlink'
import crc1 from 'crc/calculators/crc1'
import crc8 from 'crc/calculators/crc8'
import crc81wire from 'crc/calculators/crc81wire'
import crc8dvbs2 from 'crc/calculators/crc8dvbs2'
import crc16 from 'crc/calculators/crc16'
import crc16ccitt from 'crc/calculators/crc16ccitt'
import crc16modbus from 'crc/calculators/crc16modbus'
import crc16kermit from 'crc/calculators/crc16kermit'
import crc16xmodem from 'crc/calculators/crc16xmodem'
import crc24 from 'crc/calculators/crc24'
import crc32 from 'crc/calculators/crc32'
import crc32mpeg from 'crc/calculators/crc32mpeg2'
import crcjam from 'crc/calculators/crcjam'

const calculators = [
  {
    name: 'CRC1',
    calculator: crc1,
  },
  {
    name: 'CRC8',
    calculator: crc8,
  },
  {
    name: 'CRC8 1-Wire',
    calculator: crc81wire,
  },
  {
    name: 'CRC8 DVB-S2',
    calculator: crc8dvbs2,
  },
  {
    name: 'CRC16',
    calculator: crc16,
  },
  {
    name: 'CRC16 CCITT',
    calculator: crc16ccitt,
  },
  {
    name: 'CRC16 Modbus',
    calculator: crc16modbus,
  },
  {
    name: 'CRC16 Kermit',
    calculator: crc16kermit,
  },
  {
    name: 'CRC16 XModem',
    calculator: crc16xmodem,
  },
  {
    name: 'CRC24',
    calculator: crc24,
  },
  {
    name: 'CRC32',
    calculator: crc32,
  },
  {
    name: 'CRC32 MPEG-2',
    calculator: crc32mpeg,
  },
  {
    name: 'CRCJAM',
    calculator: crcjam,
  },
] as const

class CRCCalculator {
  async calculate(data: Blob) {
    const buffer = await data.arrayBuffer()
    const uint8Array = new Uint8Array(buffer)
    const results = calculators.map(({ name, calculator }) => {
      const crc = calculator(uint8Array).toString(16)
      return {
        name,
        crc,
      }
    })
    return results
  }
}

export type CRCCalculatorType = typeof CRCCalculator

Comlink.expose(CRCCalculator)
