import * as React from "react";
import { Root, TitleBox, Title, Box } from "./elements";


export const Access = () => {

    return (
        <Root >
            <Box>
                <TitleBox>
                    <Title>移動手段</Title>
                </TitleBox>
                <p>
                    島外と対馬とを結ぶ交通は空路と海路が選べます。
                        空路は「対馬やまねこ空港」と「福岡空港」「長崎空港」の両空港間で定期便が就航、
                        海路では「厳原」「比田勝」の両港と「福岡（博多港）」「韓国（釜山港）」の間でフェリーや高速船が運行しており、
                        様々な経路で対馬にお越しいただくことができます。
                </p>
            </Box>
            <Box>
                <TitleBox>
                    <Title>アクセスの地図画像を作るかも</Title>
                </TitleBox>
            </Box>
        </Root>
    )
}