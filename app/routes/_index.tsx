import { styled } from '@mui/material'
import { Link } from 'react-router'
import Typography from '@mui/material/Typography'
import { css } from '@mui/material/styles'

import Shamp from '~/assets/icons/shamp.svg?react'
import Github from '~/assets/icons/github.svg?react'
import route from '~/constants/route'

const Root = styled('article')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px auto 0;
  
  ${({ theme }) => css`
    ${theme.breakpoints.up('lg')} {
      margin: 95px auto 0;
    }
  `}}
`

const LinkBadge = styled(Link)`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -.3px;
  display: inline-flex;
  padding: 6px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  border: 1px solid rgb(43, 33, 24, .5);
  background: radial-gradient(1686.42% 113.39% at 83.25% 2.56%, #2B21181a, #2B211800);
  box-shadow: none;
  margin-bottom: 40px;
  
  ${({ theme }) => css`
    ${theme.breakpoints.up('lg')} {
      margin-bottom: 25px;
    }
  `}}
`

const Title = styled('h1')`
  padding: 0 20px;
  margin-bottom: 15px;
  margin-top: 0;
  font-size: 2.75rem;
  line-height: 120%;
  letter-spacing: -.88px;
  color: #2B2118;
  text-align: center;
  font-weight: 600;
  
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      font-size: 4rem;
      line-height: 81px;
      letter-spacing: -1.28px;
    }
    ${theme.breakpoints.up('lg')} {
      font-size: 4.5rem;
      letter-spacing: -1.44px;
      padding-bottom: 8px;
    }
  `}}
`

const Description = styled('h3')`
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -.4px;
  text-wrap: balance;
  cursor: default;
  margin-bottom: 25px;
  padding: 0 20px;
  word-break: keep-all;
  overflow-wrap: break-word;
`

const Actions = styled('div')`
  display: flex;
  gap: 20px;
`

const StartLink = styled(Link)`
  display: flex;
  padding: 10px 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  color: #fff;
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
  cursor: pointer;
  
  &:hover {
    transform: translate3d(0, -2px, 0);
    background: radial-gradient(141.42% 141.42% at 100% 0%, #ffffff80, #fff0),
      radial-gradient(140.35% 140.35% at 100% 94.74%, #2e3032, #2e303200),
      radial-gradient(89.94% 89.94% at 18.42% 15.79%, #2B2118, #2B211800);
  }
`

const RepositoryLink = styled(Link)`
  display: flex;
  padding: 10px 18px;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(43, 33, 24, .5);
  gap: 8px;
  border-radius: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-shadow: 0 0 2px rgba(0, 0, 0, .2);
  transition: all .2s ease-in-out;
  width: fit-content;

  &:hover {
    transform: translate3d(0, -2px, 0);
    border-color: rgb(43, 33, 24, .3);
  }
`

const ShampIcon = styled(Shamp)`
  width: 20px;
  height: 20px;
`

const GITHUB_PROFILE_URL = 'https://github.com/Shamp07'
const GITHUB_REPOSITORY_URL = 'https://github.com/Shamp07/notebook-stocks'

export default function Home() {
  return (
    <Root>
      <LinkBadge
        to={GITHUB_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ShampIcon />
        <span>Shamp Project 2025</span>
      </LinkBadge>
      <Title>
        연습을 위한
        <br />
        완벽한 가상 공책
      </Title>
      <Description>
        <b>공책 주식</b>
        은 주식 거래의 연습을 위한 강력하고 재미있는 도구입니다.
        <br />
        현실에서는 개미였던 내가 공책 위에서는 주식&nbsp;시장 거물?!
      </Description>
      <Actions>
        <StartLink to={route.home}>
          <Typography>
            시작하기
          </Typography>
        </StartLink>
        <RepositoryLink
          to={GITHUB_REPOSITORY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <Typography>
            Github
          </Typography>
        </RepositoryLink>
      </Actions>
    </Root>
  )
}
