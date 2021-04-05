public class Divide1 {
    static int MAX_LEVEL = 100;
    public void recur(int level, int param) {
        // terminator
        if (level > Divide1.MAX_LEVEL) {
            // process result
            return;
        }

        // process current logic
        process(level, param);

        // drill down
        int newParam = param + 1;
        recur(level + 1, newParam);
    }

    private void process(int level, int param) {
        // logic
    }

    public static void main(String[] args) {
        System.out.print(new Divide1());
    }
}