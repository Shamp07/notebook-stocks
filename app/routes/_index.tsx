import { styled } from '@mui/material'
import { Link } from 'react-router'
import Typography from '@mui/material/Typography'

const Root = styled('article')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 95px auto 0;
`

const Title = styled('h1')`
  margin: 0;
  font-size: 72px;
  letter-spacing: -1.44px;
  padding-bottom: 8px;
  color: #2B2118;
  text-align: center;
  line-height: 81px;
  font-weight: 600;
`

const Description = styled('h3')`
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -.4px;
  text-wrap: balance;
  cursor: default;
  margin-bottom: 25px;
  padding: 0 20px;
`

const Actions = styled('div')`
  display: flex;
  justify-content: space-between;
`

const StartLink = styled(Link)`
  display: flex;
  padding: 10px 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  text-shadow: 0 0 2px rgba(0, 0, 0, .2);
  transition: all .2s ease-in-out;
  width: fit-content;
  position: relative;
  background: radial-gradient(141.42% 141.42% at 100% 0%, #fff6, #fff0),
    radial-gradient(140.35% 140.35% at 100% 94.74%, #2e3032, #2e303200),
    radial-gradient(89.94% 89.94% at 18.42% 15.79%, #2B2118, #2B211800);
  box-shadow: 0 1px #ffffffbf inset;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    transform: translate3d(0, -2px, 0);
  }
`

export default function _index() {
  return (
    <Root>
      <Title>
        연습을 위한
        <br />
        완벽한 가상 공책
      </Title>
      <Description>
        <b>공책 주식</b>
        은 주식 거래의 연습을 위한 강력하고 재미있는 도구입니다.
        <br />
        현실에서는 개미였던 내가 공책 위에서는 주식 시장 거물?!
      </Description>
      <Actions>
        <StartLink to="/start">
          <Typography>
            시작하기
          </Typography>
        </StartLink>
      </Actions>
    </Root>
  )
}
