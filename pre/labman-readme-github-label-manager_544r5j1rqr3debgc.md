# labman README (GitHub Label Manager)
Updated `07162022-200254`

- [WTF](https://davidblue.wtf/drafts/D2B7200B-06E8-498E-8F4C-D0B0E5DF9D23.html)
- [Simplenote Local](simplenote://note/0d67e56ababc4ca09727bffadec0ea78)
- [Simplenote Publish](http://simp.ly/publish/gTClfw)
- [Craft Publish](https://www.craft.do/s/Hb7rxqag64dICk)
- [Tilde](https://tilde.town/~extratone/manual/labman)

---

# 👨🏼‍🔬 github label manager cli

<a href="https://www.npmjs.com/package/labman">
    <img alt="npm" src="https://img.shields.io/npm/v/labman.svg?style=flat-square">
</a>

<a href="https://www.npmjs.com/package/labman">
    <img alt="npm" src="https://img.shields.io/npm/dt/labman?style=flat-square">
</a>

<a href="https://coveralls.io/github/bradgarropy/labman-cli">
    <img alt="coveralls" src="https://img.shields.io/coveralls/github/bradgarropy/labman-cli?style=flat-square">
</a>

_Command line tool for managing issue labels across GitHub repositories._

![usage][gif]

## 📦 Installation

Installation is optional, as you can run this package with [`npx`][npx].

```
npm install labman --global
```

## 🥑 Usage

If you have `labman` installed globally you can run it as shown below.

```
labman --help
```

Alternatively, you can run it with [`npx`][npx].

```
npx labman --help
```

## 👨🏼‍🏫 Commands

### `login`

Validates and stores your GitHub [personal access token][token].

#### Options

| Name            | Description                                              | Default |
| --------------- | -------------------------------------------------------- | ------- |
| `username`      | GitHub username.                                         |         |
| `token`         | GitHub [personal access token][token] with `repo` scope. |         |
| `--force`, `-f` | Overwrite existing login.                                | `false` |

#### Examples

Login as `bradgarropy` with a [personal access token][token].

```
labman login bradgarropy 123456
```

Login as `gabygarropy`, overwriting the `bradgarropy` login.

```
labman login gabygarropy 456789
```

### `labman`

Copies labels from one repository to another.

The `source` and `destination` can be provided in two ways.

-   `owner/repo`, like `bradgarropy/labman-cli`
-   `repo`, like `labman-cli`

If an `owner` is not specified, `labman` will assume the `username` you provided during `login`.

If `labels` is not provided, `labman` will copy all labels from `source` to `destination`.

#### Options

| Name              | Description                                                          | Default |
| ----------------- | -------------------------------------------------------------------- | ------- |
| `source`          | GitHub repository.                                                   |         |
| `destination`     | GitHub repository.                                                   |         |
| `labels`          | Space separated list of label names to copy.                         | `[]`    |
| `--clobber`, `-c` | Remove all labels from `destination` before copying `source` labels. | `false` |

#### Examples

Copy all labels from `bradgarropy/label-source` to `bradgarropy/label-destination`.

```
labman bradgarropy/label-source bradgarropy/label-destination
```

Delete all labels from `bradgarropy/label-destionation`, then copy all labels from `bradgarropy/label-source` to `bradgarropy/label-destination`.

```
labman bradgarropy/label-source bradgarropy/label-destination --clobber
```

Copy only the `bug` and `todo` labels from `bradgarropy/label-source` to `bradgarropy/label-destination`.

```
labman bradgarropy/label-source bradgarropy/label-destination bug todo
```

Use the shorthand method for providing `source` and `destination` repositories.

```
labman login bradgarropy 123456
labman label-source label-destination
```

### `logout`

Removes your GitHub [personal access token][token].

#### Examples

```
labman logout
```

## ❔ Questions

If you have any trouble, definitely [open an issue][issue] and I'll take a look.

If all else fails, you can ask me directly on [Twitter][twitter] or my [AMA][ama].

[gif]: https://raw.githubusercontent.com/bradgarropy/labman-cli/master/usage.gif
[npx]: https://www.npmjs.com/package/npx
[token]: https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
[issue]: https://github.com/bradgarropy/labman-cli/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://github.com/bradgarropy/ama
