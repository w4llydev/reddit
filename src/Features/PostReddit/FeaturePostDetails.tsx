import React from 'react'

import { Post } from 'Components/Post'
import { Opacity } from 'Components/Opacity'
import { Flex } from 'Components/Flex'

import { usePostDetails } from './Hooks/usePostDetails'

export const FeaturePostDetails = () => {
  const { post } = usePostDetails()
  const isDismiss = post?.isDismiss ?? false

  if (isDismiss) {
    return (
      <Flex width="100%" justify="center" align="center" height="100%">
        <Opacity opacity={0.2}>
          <h2>Nothing to see here, Opps!</h2>
        </Opacity>
      </Flex>
    )
  }

  return <>{post && <Post {...post} />}</>
}
