# Working pnpm monorepo for AWS Lambda

# on Linux:
- `git clone https://github.com/UROjQ6r80p/pnpm-aws-monorepo`
- `cd pnpm-aws-monorepo`
- `pnpm install`
- `cd services/aws-lambda`
- `pnpm --filter=aws-lambda --prod deploy dist`
- `cd dist`
- `zip --symlinks -r dist.zip ./`
- Upload `dist.zip` to aws lambda.


No `node-linker=hoisted`, default pnpm config used.


No unneccessary modules from other packages bloating your lambda.

![image](https://github.com/UROjQ6r80p/pnpm-aws-monorepo/assets/90694123/75da0c1a-400f-49c5-94eb-747bec6601a5)

Lambda:

![image](https://github.com/UROjQ6r80p/pnpm-aws-monorepo/assets/90694123/92690ff8-72d9-4bba-9164-32086e85dc61)


# on Windows:
- download 7zip
- `git clone https://github.com/UROjQ6r80p/pnpm-aws-monorepo`
- `cd pnpm-aws-monorepo`
- `pnpm install`
- `cd services/aws-lambda`
- `pnpm --filter=aws-lambda --prod deploy dist`
- `zip a -snl -ttar dist dist/` will be saved to `dist.tar`
- copy .tar to Linux system. I use WSL
- on Linux unpack tar `tar -xvf dist.tar`
- `cd dist`
- `zip --symlinks -r dist.zip ./`
- Upload `dist.zip` to AWS Lambda.
