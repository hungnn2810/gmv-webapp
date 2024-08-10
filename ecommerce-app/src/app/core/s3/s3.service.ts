// import { Injectable } from '@angular/core';
// import {
//   GetObjectCommand,
//   PutObjectCommand,
//   S3Client,
// } from '@aws-sdk/client-s3';
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
// import { Environment } from '../../environment.interface';

// declare let __config: Environment;

// @Injectable({
//   providedIn: 'root',
// })
// export class S3Service {
//   s3Client = new S3Client({
//     endpoint: __config.S3_ENDPOINT,
//     region: __config.S3_REGION,
//     credentials: {
//       accessKeyId: __config.S3_ACCESS_KEY_ID,
//       secretAccessKey: __config.S3_SECRET_ACCESS_KEY,
//     },
//   });

//   async getObjectURL(key: any): Promise<string> {
//     const command = new GetObjectCommand({
//       Bucket: 'parking-images',
//       Key: key,
//     });
//     return await getSignedUrl(this.s3Client, command);
//   }

//   async putObject(key: string, bucket: string, file: File): Promise<any> {
//     const input = {
//       Bucket: bucket,
//       Key: key,
//       Body: file,
//       length: file.size,
//     };
//     const command = new PutObjectCommand(input);
//     let respose = await this.s3Client.send(command);
//     return respose;
//   }
// }
