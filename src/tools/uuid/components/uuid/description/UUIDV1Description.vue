<template>
  <n-p>
    Version 1 concatenates the 48-bit MAC address of the "node" (that is, the computer generating
    the UUID), with a 60-bit timestamp, being the number of 100-nanosecond intervals since midnight
    15 October 1582 Coordinated Universal Time (UTC), the date on which the Gregorian calendar was
    first adopted outside the Catholic Church and Papal States. RFC 4122 states that the time value
    rolls over around 3400 AD, depending on the algorithm used, which implies that the 60-bit
    timestamp is a signed quantity. However some software, such as the libuuid library, treats the
    timestamp as unsigned, putting the rollover time in 5236 AD.[16] The rollover time as defined by
    ITU-T Rec. X.667 is 3603 AD.
  </n-p>
</template>

<script setup lang="ts">
import { NP } from 'naive-ui'
</script>
