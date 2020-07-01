import React from 'react'
import { render, waitFor, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react'
import nock from 'nock'

import { Application } from 'Application'
import { URLReddit } from 'Features/PostReddit/API/Reddit'
import { createReply, data } from './helpers'

describe('when click on dismiss', () => {
  it('Should hide the post', async () => {
    const post = data.post
    const reply = createReply([post])

    nock(URLReddit)
      .get('/top.json')
      .query(true)
      .reply(200, () => reply, { 'Access-Control-Allow-Origin': '*' })

    const { queryByText } = render(<Application />)

    await waitFor(() => screen.getByTestId(post.id.toString()))

    fireEvent.click(screen.getByText('Dismiss'))

    await waitForElementToBeRemoved(() => queryByText(new RegExp(post.title)))
  })
})
