<template>
        <div>
        <!-- <lazy-youtube-video src="https://youtu.be/embed/53MV55yyYMU"></lazy-youtube-video> -->
        <lazy-youtube-video src="https://www.youtube.com/embed/53MV55yyYMU"></lazy-youtube-video>
        <v-divider></v-divider>
        <!-- template paskibra -->
        <v-container fluid grid-list-sm>
            <div class="text-right">
                <v-btn small text class="blue--text mb-2">Paskibra <v-icon>mdi-chevron-right</v-icon></v-btn>
            </div>
            <v-row>
                    <v-col cols="4" sm="4" v-for="p in programs.paskibra" :key="p">
                    <v-card>
                        <v-img :src="p.imgUrl"></v-img>
                        <v-card-actions small text>
                            <v-layout wrap justify-center>
                                <v-btn icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>mdi-bookmark</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                            </v-layout>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <!-- end template paskibra -->
        <!-- template pramuka -->
        <v-container fluid>
            <div class="text-right">
                <v-btn small text class="blue--text mb-2">Pramuka <v-icon>mdi-chevron-right</v-icon></v-btn>
            </div>
            <v-row>
                <v-col cols="4" sm="4" v-for="p in programs.pramuka" :key="p">
                    <v-card>
                        <v-img :src="p.imgUrl"></v-img>
                        <v-card-actions small text>
                            <v-layout wrap justify-center>
                                <v-btn icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>mdi-bookmark</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                            </v-layout>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <!-- end pramuka -->
        <v-container fluid>
            <div class="text-right">
                <v-btn small text class="blue--text mb-2">
                   Taekwondo <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            </div>
            <v-row>
                <v-col cols="4" sm="4" v-for="p in programs.taekwondo" :key="p">
                    <v-card>
                        <v-img :src="p.imgUrl"></v-img>
                        <v-card-actions small text>
                            <v-layout wrap justify-center>
                                <v-btn icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>mdi-bookmark</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                            </v-layout>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        </div>
        
</template>

<script>
import 'vue-lazy-youtube-video/dist/style.css'
import LazyYoutubeVideo from 'vue-lazy-youtube-video'
export default {
    data: () => ({
        programs: {
            paskibra: [
                { id: 1, name: 'paskibra', imgUrl: 'https://lh3.googleusercontent.com/lfy-4IGjGtQUhuOkeEMk7DZi4JS7Oe8LXkh8-2v5vX7aiKNlBbPjLbfa7EwJtnm1m8tW0dkb_GKf4SAsZEf2CwbIBLqSuvzE8MpUjUfH6PDDMl3W6vhPTFu04axnqRqc8QGwSWz5vyDFJbnL09rcIn0AT80XbVDFmP8XEa5pvitkLRIijsl0biIhA3W81y71k_q_jq-unrjg_tPseWz_63vbZ5yf4ag9JbVuiCmiTddC-Ebsr4Rl35ozVyT5SQTVkc0N-c2nGKOITmWNruqzOHfPbgp_DXvWofOFZuwQmBYDj5NMcHS3SqBKRLKWJ31AzwllH4MaoHKdEOdrp16dxaw78hp862a0KkD1TUUsNSgo3MD8zySfR8CCcMfHPiNLYqmYqgWiB48icc9uF8ri-NeF9BqDgHLqOH4YdoF4DpWXyaimdHi-KSsbsvhnDT0QcC7oB4pLNyXGQdSlN9uOJsC7rtNdk02Yd3UPaRzpCxoRHG_zOBvb3cSmuz-SGpV8lnen9UbZRv25UK7tAZ4d8e3k-RPm9TgfVNXGBozASZ7qSxNLpuU4wwWUcPGp4lY65aVl4xm1ffrfINWO3pqhiIx7eN6v7lcJstyggNhAc6Nvyzj_P5Ya6rVn_KdxFuFnjyiHygcQKA4Rav0NKFFuAdTg1ypq10fP-M8LOgE1ASjbJ6TLVsvR4KzxNMzJ=w986-h657-no?authuser=0' },
                { id: 2, name: 'paskibra', imgUrl: 'https://lh3.googleusercontent.com/kINm4LG5hTxeSfBg9lZdiJfelc0SQs2iGTiEDlnrlOTJYUGWMdYlwKrhxHJQUvRPyUsb3lqHk3kzjEuoe48PCNtMp3eSoEVueA55h0gdoLwq0wL6lnb_3vshUPJTNAXmDqoGfkDsScXk2vcI6fCCFs0ydwac5GpZD9nfoqsK3LsWwwGwmKtFML75j0pj5AGA3-QyzkEfIrIrHYvXhZoPlXiGmjOOOrplZNRZzfd34fvm5-WsiG877o0dVwOhVvPvjhAWwT5el3PQw0sOYd0Kk9xkxKkiUYeNGcpViqYz_iN6TnDFznxWV-9JvUuexTYtonlC90-wEiDIRWnpKIEg5_ay3XBYBInQqeoZ3ky9xtpps15749FNN60aTTvC_QAKnM5r1HSLRZJ9gKNhFADLOVDBf58lgWa8AZL6ScTlK9hjFV7fQk7FF71jCcrRPz6zBjphSLnp0JLesFHvZLxHUcERV7O-wvE0AsmasiX9U4RjUNiWg37jgxuEw0lPZv6c73SioMGd_9OGQYvfBCKhcngJPwwmkuAbOsXAc6z_ZYOOG5KhuaqUfk_vg41K4QV8-bp6XEawuyPIcyYsrckm40Ud0nSG7nemzqpZBbqKgr3mAgdK23ixNfE9q_gg-q-DsaztCvwLECRziMXZRhD9MTYXtRxCzMBoepB3o2FxVHvUQUbchT1fXka2gyOi=w986-h657-no?authuser=0' },
                { id: 3, name: 'paskibra', imgUrl: 'https://lh3.googleusercontent.com/rLZKJ-P-Hq7mXxXdexdxZVZzNMtnU1y5D6lVqv9igQunTxnU2DXGPU2oIwGT8tUBsfjgBtzBfv_N1pQWqVTOCagAnawVZrTvHoTz_346XddYtJ0bEwy_25OPOdKcPFkgVzWB0DxMLCLovgmIHqmbk3OYnne4nZXXAj0wtSmopfbLyedpSVE0gVdjK5C7WkAwO_QBA2BKuBSEM-2mx_gPWIbXQ0sc1eR2EpGPu6PmUTeUESWI_qigvGTbYdx73VoHmq9kQozxbEcr5mVSh4tJ6slYUmqF8Tg0IEwpBcZSE6YQXHUbaR2hO1crRY4X9wGuLzeTlVM82dKfn7Dn6DRhb2eK8FJw3d5cL2PEbjD1k_6h7zMzU_jqZK43N3pbn-8ecwx9x8bP7KKmo6tk9Fh6dWKSTWUAGZbd0dJPRkjIJ_xU6jQE1ZjcsPEBc9hKLfOYZBVxDehoOvS_3kJmwFjvHqxI9r5Hm-PNsrDJspXFN-RuPpAExmTgZlOdh6FTdEliz2MWU2JaWjuqrevVfPRlDT3JHTPVC3N26DwCfnGjro0_uzy0nUFV3ETWahqZnXTO0DS7L8-yomwGXur7R0x9k30js13atQHFUYpXfrhUewIy16iV_PN8FZ7pgIQWRV8-aK0Dgomyi61c3rabfTbEPAQN89PPGGGAhW_WQUpq9C1oCMenaa3iiGnols1C=w986-h657-no?authuser=0' },
            ],
            taekwondo: [
                { id: 1, name: 'taekwondo', imgUrl: 'https://lh3.googleusercontent.com/Vpz3CxFqlxuxTAkwyLHBIyW70rmWmEQnA4HfJDnslzKPFxU8BTzGYC6EJIyPQBbgU4lrz6_44zRAoxPHIErcBTXhD8p7X8S-fKsnHvCpC5ziGnfXCUFa6_8vAD-_aFZjw-F_GQUU1a1ymPWfoqgNnMEUya3xtRDTpjpIDtNRgwMV_7lcAreRi_9ze1mzpJh0FGHu0OHYHS3XASwVrC9pIySqAb8h6W61X9u2cqFOoIrxYZGc6Wss63xyic6XmqGUehc0YJusiYr-UqydsPgbrYwg30WTEda52trDRr3YEdPd7hG628w9bVXBl01PTm4VKOkk0btdJ5dIcC_sqMbOEyx3VLavyOLC1Ig4ukf3ecBr82FaUDPlGLnY6GyxoYMVaxQA6yFFtMOLtCws9I1v1hpQq8bitAXXeMFcuaNfcqPlzyo7mSPSEYotYHNq8nxWvg-MSVvd4MmgSXxDf3q5tQcJx8RPCNe1ohnOF5dbpXps8YuSkVNypVmb39nj8A3-3NbNXpEFg_ARGbWryK5doO8n9cjuZfJ9_6HDhiG3k9lGiEc97CQLQSgv-Ui1cENHbHqYtj_KqACrDdiAC_gKEVOdxw2lvhiush1AXhNNPrPcMHUiLjOQSwvOs4CI15Y0U72Qip9TUAR0fF_LasJWzdtexb4K48rafXpYOBas9S8xfo_z_n_-TX8cPSkE=w986-h657-no?authuser=0' },
                { id: 2, name: 'taekwondo', imgUrl: 'https://lh3.googleusercontent.com/2VZAQQbx3tLfCfLAzzEnHmiU0R1Njp3qjq8KEckIs8ojMljup1F_2H_eBaDWpnc17LCcf0_1D_0drjLJSe0Dxp6QVMvmgrQp47OrtqChMQNmGF7RZaiWVZLoRiaaeuJFqzFLTi5xhWhlA_LJe_sf5EQjP0ChLnLy7QIwfGkEsCYJ5_XZerMu__-rl68XQWKpVWVyF_Iymjkt_-yLGsTYIgqoJYGShfMgl1Hf6hekvjz6FE9Cz3vOXFd26ZTfxybGB4W3MYQrX1GoP8x7umfdrQbK8lY1eV5RLR45fUclhLRCMmwqD3_59r55cmWiZaSo0lnkODCXiokFzgrZxer-n6wZMYFBbesUw8-W2ZB4PMfao9MVOjDM30__7pKSrdDNJ83tDDD6wJjlb6QbY_UagO14WfCo7Q04_dwOY29BiguE2A6TF1raxMp7pFinLcYjqp2HH5FBVsfWaSkXRSR1AeX7zh22njurHESnvweUxQKIVenx6hKaWXOabf5TUgmEE7nJIWcr55dp6eOR2sMgbL34vQAQ-1WQ79a66ED7xlbzwpLzuNvw0x0xP4HIepyM-lGr1KHiZEVz2XZuxjT9Kp3rwPGn5BPRm89vhxIKlAfxULRFcSHDrmS3CL4UW8IsikjS0R9nuW-cV-TxTGh1xcy4rnkbK6O5i6ChOJ4p2-OFoFXCad714l2ipP65=w986-h657-no?authuser=0' },
                { id: 3, name: 'taekwondo', imgUrl: 'https://lh3.googleusercontent.com/11S4jBBwblvj-dQ-W9nTKx8BIOweNqIfhLm-CAU4_gjYGvScn5v8_XnavjeMBSZ8smBG80JsoJI6rtzERpIqZpeQqcYIh1PnHEk-5tnyPUiLN3gVQrxLwNKNlzT9d96l2B_MSuPSBrF7H7y9gvGjqqomO_TJzjKNYr4UOqiFQPeBfyG76IbVTEzcXjs5Oo8pmlpk9rgBcOMYHuYKYm3lB0es8utADv1SfQco3kvUs_VnERoUcOqaWW0ZVbew5qstbEKd8lX8tzZkyp0rnhu-ofcx5_1EwC9SJGVVXOhuE8Rxpl5rBd9fvPmYkBwMAF6oPeALQ0WlDGoMh2_zqETKLHRHizaahyEZB4VSEPY5z15VxJO-kUJ43CxbuO7a0EmnnHw0cWjzXEcpfiE_JErv9qLmf6QRCdLbGN-bnHn8YLOBXxl3ybTBF0Dtuom40qsozqxSxnooR-t9FrtTnZNfE0u9iU6P_P_QYC0pdisV29W-7cstGf9547etvcldhnAjnLWs0YYtO_x20QDBvx8k-P2lD0W06V74pLpzXZvvfgV_cagMKE9cyf63VWTTEuLDL2Drb6gcxmZjGOHta2Wxvxa3KxjyQpPRHutIAA9bwddwzVVFGn3X25W993RNuzclIGnpGt-34pgB-hinmgp_eYZTd2DEsQ5S7czraVEIy1Z4rgObRPLJlvsXU-5V=w986-h657-no?authuser=0' },
            ],
            tari: [

            ],
            ipa: [

            ],
            pramuka: [
                { id: 1, name: 'pramuka', imgUrl: 'https://lh3.googleusercontent.com/zsH4KU4vRJ7fvSxcYU90dtxanhnls8dvqIFwsIz_euwisRpNTnu1Clxo8r109Q3MAmXmgiGZFzIQrkfjvND0zpPCyi7I0QVKzyGBuB8xOnFs-1hJcP2ytVhgSQpIicPSSeVUaiOkPXnVvJzBgccWruow5EJf2MLDfJrkHasutVStXoZI8QIlilglHuiGx---d-hrVGL-S2_ukjoP3iKKVwbwigVZH-zhSgLrLQ3ifCSjT9RJ77qzwGamMIazt5EIh2tbCrDBMIYJB7-amvDKzvkO8YGfBuQZbho1bd44r81KxthWECUuvbNrOLwCTBT2MmjAhunOb4bXAIKWg4cXE-OeXLETq7H-wF-nOtZJwSa7SUiCiItZKGUPCIcOpyGNnPbyWXThymWsTQ6vJsnxTJ4xIqd-rHcchYJ3TNgXQhVizrJ1LkUlhqXgdKQ3dmLbP6rOjs4yw6h5d3MiubAO1HsFOsTCHhsDYquEilOG8s-EpAiZcOlWj9_PZYL_cUd2g04NakVZTDnYGQeHCEYpTEbMXal0G40729UjYNcbR289wRQ8QQNOyheRHwe3ZaugPAGYFNIZuw7tlvTo_K8qHjnSWpssjj6sn8BTg-M6ovoTwlv27zmVCd9C3ACsckDWW-aFPBiJ4gVtmSjqqo46kI8sLnCtKKCHTmrCMPwr3wyygPU3hEWqRmasADzR=w648-h432-no?authuser=0'  },
                { id: 2, name: 'pramuka', imgUrl: 'https://lh3.googleusercontent.com/W95NtcvoWebwC4OO3VWk7LTbD1bWRRA5HdVqgKpiIGyDeBYZeeXNUP-kr2ql80GBeEq5uilc6IgDl68fL1y2VgPiugogQrj9RFei0h_dvfo8U4npbYOCM65HDonxVjpur1c67pNMpXBfc7wgQ-XuIPlxiwSW3jy6sVENZAxkIYrHn7jFYNHq8q4iERm5oOig1if6H-olT-Q8j67u250yIwX-aPG6ARWURx3w0xoiL6teKuHcB0z-ZAbB3esvkN-P691xwbaTgjr59IEUPAQqB-Qf77zRZ61JQAJkRaMirZOm7GgWJ7qbXxADqvwSmzURaG-_NZc15o4mjMfmkWsWWeZas-Cl2P2r4wyMMiLM4UJR--7gCbmVLIIqJBYTdHwoyYGxSQZ9BwZy4SJdY-aJJWf-5OhKjer-eh_4V22VDQHbCOCegDeCswebHPl9ZY9cuAPBehEYNr2yQnvDQz-1_UGczHGq_gj0b-QZxvyOFgTmHUilkP8KRRMOZ0Q2T6dNjjRwNOKj03MHe8UYdKp2cQS1xR-0a1hsTk4lgmAjf-4TpR3oHxR_Uqz8c8LodrmUtvPjDPTH2_8dRcopH5VOzJ3b7TpCZdhbzDApQ6Uhds9o1Ay4_esnQT0AlLtxdutw4tUkd73WbOc_uuK0kgLRgOm04wsJgEd0qhuJzY34iI9__ZLJ1vYqgNhqtgCt=w648-h432-no?authuser=0'  },
                { id: 3, name: 'pramuka', imgUrl: 'https://lh3.googleusercontent.com/ErUz1OxDfcaT7_3RhfbGlLvCO6r07Bin2QWQ5QAO1IuyPa6ymv5qe0QJD0JKkqM_IF0ym2tMlS1ZVozDGW_UG8-jPxWCu4XkMVbFftlK-4ctQiH5QkPpO9qGDsWacPOGqxVVfHeRfwuV6G57UjRH3YQeg1mBtcN8os2v66T1FxSfkQWeiwsCxEzl6nL7BHqXsfSpDv-M_dPDCc85Ux5eFHzkXkZI5ClDFGgZ_60HvAtZV0rszuSwVhiMVvJcZ0kSPwzQqNTxXL4YB-XB9ST7vNZe3xUs6tHtBBnpbk2sZ_a2ZWV9hFTUJarqS7oWv1gNy-Y7F3DT-ORbw3ytrmhOeiveWqth_AmGa_7h-hMp6qBUvJwaKC2iXH9Wh4VfQdZVLA49GNF23DMrzZn5k_JqgQL1POdIHTKhyR5houN7a8KOkpXvRcO9jv2SSZw5n5M2t7jmP_QMKLihIYbZOcsghVLRUPDeWKrjl903q3mYrmG9kFu2X_AvckrH_X_A85rW_QAJ6kn1oJB8njBd1I7O4eYAmAwsEEc39o1gfsJHSGPisoU3IQfiVKMcKEMu5thVRnOpIj8NOAAJ6sw6-Xd93wCGoxu5ihCsRtULy6gzFRY-8885SJ4l07vtFw7qAmHwsOM832CIO8cKU4MwGPmyATli20fo7dR1o7-bXDgjW4_3gf-esxF8HCGxsCMV=w648-h432-no?authuser=0'  },
            ]
        }
    }),
    components: {
        LazyYoutubeVideo
    }
}
</script>