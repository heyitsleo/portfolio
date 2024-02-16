import { StyledSocial } from './styles'
import { SocialProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Social(props: SocialProps) {
    return (
        <StyledSocial href={props.href}>
            <FontAwesomeIcon icon={props.icon} />
            <div />
        </StyledSocial>
    )
}
