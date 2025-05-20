import type { ToolRoute } from '@/tools/interface'
import { routes as uuidV4GeneratorRoutes } from './uuid-v4-generator/routes'
import { routes as uuidV1GeneratorRoutes } from './uuid-v1-generator/routes'
import { routes as uuidV3GeneratorRoutes } from './uuid-v3-generator/routes'
import { routes as uuidV5GeneratorRoutes } from './uuid-v5-generator/routes'
import { routes as uuidV6GeneratorRoutes } from './uuid-v6-generator/routes'
import { routes as uuidV7GeneratorRoutes } from './uuid-v7-generator/routes'
import { routes as uuidV1V6ConverterRoutes } from './uuid-v1-v6-converter/routes'
import { routes as uuidNilGeneratorRoutes } from './uuid-nil-generator/routes'
import { routes as uuidMaxGeneratorRoutes } from './uuid-max-generator/routes'
import { routes as uuidDecoderRoutes } from './uuid-decoder/routes'
import { routes as uuidToolsRoutes } from './uuid-tools/routes'
import { routes as uuidBase64IntegerOctalBinaryConverterRoutes } from './uuid-base64-integer-octal-binary-converter/routes'
import { routes as uuidV4BulkGeneratorRoutes } from './uuid-v4-bulk-generator/routes'
import { routes as uuidValidatorRoutes } from './uuid-validator/routes'

export const routes: ToolRoute[] = [
  ...uuidV4GeneratorRoutes,
  ...uuidV1GeneratorRoutes,
  ...uuidV3GeneratorRoutes,
  ...uuidV5GeneratorRoutes,
  ...uuidV6GeneratorRoutes,
  ...uuidV7GeneratorRoutes,
  ...uuidNilGeneratorRoutes,
  ...uuidMaxGeneratorRoutes,
  ...uuidDecoderRoutes,
  ...uuidToolsRoutes,
  ...uuidV1V6ConverterRoutes,
  ...uuidBase64IntegerOctalBinaryConverterRoutes,
  ...uuidV4BulkGeneratorRoutes,
  ...uuidValidatorRoutes,
]
