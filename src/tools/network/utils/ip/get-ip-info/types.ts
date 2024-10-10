export interface IPInfo {
  // location
  timezone?: string | null
  longitude?: number | null
  latitude?: number | null
  country?: string | null
  continent?: string | null
  city?: string | null

  //   network
  hostname?: string | null
  asn?: number | null
  asn_organization?: string | null
  isp?: string | null
  organization?: string | null
}
