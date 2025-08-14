export interface DNSJSONResponse {
  Status: number
  TC: boolean
  RD: boolean
  RA: boolean
  AD: boolean
  CD: boolean
  Question: DNSJSONQuestion[]
  Answer?: DNSJSONAnswer[]
  Additional?: DNSJSONAnswer[]
  edns_client_subnet?: string
  Comment?: string
}

export interface DNSJSONQuestion {
  name: string
  type: number
}

export interface DNSJSONAnswer {
  name: string
  type: number
  TTL: number
  data: string
}
