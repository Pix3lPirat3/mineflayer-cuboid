var v = require('vec3');

module.exports = class Cuboid {

    // Accepts two vec3 positions
    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
        this.xMin = Math.min(point1.x, point2.x);
        this.xMax = Math.max(point1.x, point2.x);
        this.yMin = Math.min(point1.y, point2.y);
        this.yMax = Math.max(point1.y, point2.y);
        this.zMin = Math.min(point1.z, point2.z);
        this.zMax = Math.max(point1.z, point2.z);
        this.xMinCentered = this.xMin + 0.5;
        this.xMaxCentered = this.xMax + 0.5;
        this.yMinCentered = this.yMin + 0.5;
        this.yMaxCentered = this.yMax + 0.5;
        this.zMinCentered = this.zMin + 0.5;
        this.zMaxCentered = this.zMax + 0.5;
    }
  
    // Returns Array[vec3]
    getPositions() {
        let blocks = new Array();
        for(let y = this.yMin; y <= this.yMax; ++y) {
            for(let x = this.xMin; x <= this.xMax; ++x) {
                for(let z = this.zMin; z <= this.zMax; ++z) {
                    blocks.push(v(x, y, z));
                }
            }
        }
        return blocks;
    }

    // Returns vec3
    getCenter() {
        return v((this.xMax - this.xMin) / 2 + this.xMin, (this.yMax - this.yMin) / 2 + this.yMin, (this.zMax - this.zMin) / 2 + this.zMin);
    }

    // Returns number
    getDistance() {
        return this.point1.distanceTo(this.getPoint2())
    }

    // Returns number
    getDistanceSquared() {
        return this.getPoint1().distanceSquared(this.getPoint2());
    }

    // Returns number
    getHeight() {
        return this.yMax - this.yMin + 1;
    }

    // Returns vec3
    getPoint1() {
      return this.point1;
    }

    // Returns vec3
    getPoint2() {
        return this.point2;
    }

    // Returns vec3
    getRandom() {
        let distX = Math.abs(this.xMax - this.xMin);
        let x = Math.floor(Math.random() * (distX + 1)) + this.xMin;

        let distY = Math.abs(this.yMax - this.yMin);
        let y = Math.floor(Math.random() * (distY + 1)) + this.yMin;

        let distZ = Math.abs(this.zMax - this.zMin);
        let z = Math.floor(Math.random() * (distZ + 1)) + this.zMin;
        
        return v(x, y, z);
    }
    
    // Returns number
    getSize() {
        return this.getHeight() * this.getXWidth() * this.getZWidth();
    }

    // Returns number
    getXWidth() {
        return this.xMax - this.xMin + 1;
    }

    // Returns number
    getZWidth() {
        return this.zMax - this.zMin + 1;
    }

    // Returns boolean
    posIsIn(loc) {
        return loc.x >= this.xMin && loc.x <= this.xMax && loc.y >= this.yMin && loc.y <= this.yMax && loc
                .z >= this.zMin && loc.z <= this.zMax;
    }

    // Returns boolean
    isInWithMarge(loc, marge) {
        return loc.x >= this.xMinCentered - marge && loc.x <= this.xMaxCentered + marge && loc.y >= this.yMinCentered - marge && loc
                .y <= this.yMaxCentered + marge && loc.z >= this.zMinCentered - marge && loc.z <= this.zMaxCentered + marge;
    }

    // Returns Array[vec3]
    getCorners() {
        return [v(this.xMin, this.yMin, this.zMin), v(this.xMin, this.yMin, this.zMax), v(this.xMin, this.yMax, this.zMin), v(this.xMin, this.yMax, this.zMax), v(this.xMax, this.yMin, this.zMin), v(this.xMax, this.yMin, this.zMax), v(this.xMax, this.yMax, this.zMin), v(this.xMax, this.yMax, this.zMax)];
    }
}