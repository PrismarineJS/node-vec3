import { expectType } from "tsd";
import vec3, { Vec3 } from "..";

const vec = vec3([1, 2, 3]);
expectType<Vec3>(vec);
expectType<Vec3>(vec3([1, 2, 3]));
expectType<Vec3>(vec3({ x: 1, y: 2, z: 3 }));
expectType<Vec3>(vec3("1, 2, 3"));
expectType<Vec3>(vec3(1, 2, 3));
expectType<Vec3>(new Vec3(1,2,3));
// @ts-expect-error
vec3(1, 2);
// @ts-expect-error
vec3("1", 2);

expectType<number>(vec.x);
expectType<number>(vec.y);
expectType<number>(vec.z);

expectType<Vec3>(vec.set(4, 5, 6));
expectType<Vec3>(vec.update(vec));
expectType<Vec3>(vec.floored());
expectType<Vec3>(vec.floor());
expectType<Vec3>(vec.offset(0, 0, 0));
expectType<Vec3>(vec.translate(0, 0, 0));
expectType<Vec3>(vec.add(vec));
expectType<Vec3>(vec.subtract(vec));
expectType<Vec3>(vec.multiply(vec));
expectType<Vec3>(vec.divide(vec));
expectType<Vec3>(vec.plus(vec));
expectType<Vec3>(vec.minus(vec));
expectType<Vec3>(vec.scaled(2));
expectType<Vec3>(vec.abs());
expectType<number>(vec.volume());
expectType<Vec3>(vec.modulus(vec));
expectType<number>(vec.distanceTo(vec));
expectType<number>(vec.distanceSquared(vec));
expectType<boolean>(vec.equals(vec));
expectType<string>(vec.toString());
expectType<Vec3>(vec.clone());
expectType<Vec3>(vec.min(vec));
expectType<Vec3>(vec.max(vec));
expectType<number>(vec.norm());
expectType<number>(vec.dot(vec));
expectType<Vec3>(vec.cross(vec));
expectType<Vec3>(vec.unit());
expectType<Vec3>(vec.normalize());
expectType<Vec3>(vec.scale(2));
expectType<number>(vec.xyDistanceTo(vec));
expectType<number>(vec.xzDistanceTo(vec));
expectType<number>(vec.yzDistanceTo(vec));
expectType<number>(vec.innerProduct(vec));
expectType<number>(vec.manhattanDistanceTo(vec));
expectType<[number, number, number]>(vec.toArray());
