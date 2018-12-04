export default class Cast {

    public static toNumber(value): number {
        let num = Number(value);

        return isFinite(num) ? num : 0;
    }

    public static toInt(value): number {
        return parseInt(value);
    }

    public static toFloat(value, precision: number = null): number {
        let result = this.toNumber(value);

        return precision ? parseFloat(result.toFixed(precision)) : result;
    }

    public static toString(value): string {
        return String(value);
    }

    public static toBool(value): Boolean {
        if (typeof value === "string") {
            value = this.toNumber(value);
        } else if (typeof value === "object" && value.length !== undefined) {
            value = value.length;
        } else if (typeof value === "object") {
            value = Object.keys(value).length;
        }

        return Boolean(value);
    }
}
