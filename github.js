class Github {
  constructor() {
    this.config = {
      headers: {
        Authorization: 'token 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'
      }
    }
    this.client_id = '0a61f57cd41218ae8710'
    this.client_secret = 'ca4295158702498a4394dbda7af6bca3d360c7b31'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    )
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    )

    const profile = await profileResponse.json()
    const repos = await repoResponse.json()

    return {
      profile,
      repos
    }
  }
}
