
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-27 17:00:00", "b": 406.0}, {"a": "2024-11-27 17:05:00", "b": 407.0}, {"a": "2024-11-27 17:10:00", "b": 405.5}, {"a": "2024-11-27 17:15:00", "b": 405.0}, {"a": "2024-11-27 17:20:00", "b": 406.25}, {"a": "2024-11-27 17:25:00", "b": 407.6666666666667}, {"a": "2024-11-27 17:30:00", "b": 418.75}, {"a": "2024-11-27 17:35:00", "b": 433.0}, {"a": "2024-11-27 17:40:00", "b": 458.0}, {"a": "2024-11-27 17:45:00", "b": 479.8}, {"a": "2024-11-27 17:50:00", "b": 454.8}, {"a": "2024-11-27 17:55:00", "b": 448.2}, {"a": "2024-11-27 18:00:00", "b": 499.0}, {"a": "2024-11-27 18:05:00", "b": 453.4}, {"a": "2024-11-27 18:10:00", "b": 495.4}, {"a": "2024-11-27 18:15:00", "b": 440.8}, {"a": "2024-11-27 18:20:00", "b": 452.2}, {"a": "2024-11-27 18:25:00", "b": 456.4}, {"a": "2024-11-27 18:30:00", "b": 493.6}, {"a": "2024-11-27 18:35:00", "b": 430.2}, {"a": "2024-11-27 18:40:00", "b": 431.5}, {"a": "2024-11-27 18:45:00", "b": 496.6}, {"a": "2024-11-27 18:50:00", "b": 453.2}, {"a": "2024-11-27 18:55:00", "b": 438.2}, {"a": "2024-11-27 19:00:00", "b": 578.8}, {"a": "2024-11-27 19:05:00", "b": 534.6}, {"a": "2024-11-27 19:10:00", "b": 680.0}, {"a": "2024-11-27 19:15:00", "b": 550.0}, {"a": "2024-11-27 19:20:00", "b": 494.2}, {"a": "2024-11-27 19:25:00", "b": 497.8}, {"a": "2024-11-27 19:30:00", "b": 664.25}, {"a": "2024-11-27 19:35:00", "b": 512.2}, {"a": "2024-11-27 19:40:00", "b": 656.4}, {"a": "2024-11-27 19:45:00", "b": 707.2}, {"a": "2024-11-27 19:50:00", "b": 823.6}, {"a": "2024-11-27 19:55:00", "b": 661.6}, {"a": "2024-11-27 20:00:00", "b": 687.2}, {"a": "2024-11-27 20:05:00", "b": 519.4}, {"a": "2024-11-27 20:10:00", "b": 730.8}, {"a": "2024-11-27 20:15:00", "b": 516.6}, {"a": "2024-11-27 20:20:00", "b": 649.25}, {"a": "2024-11-27 20:25:00", "b": 544.2}, {"a": "2024-11-27 20:30:00", "b": 629.0}, {"a": "2024-11-27 20:35:00", "b": 487.75}, {"a": "2024-11-27 20:40:00", "b": 501.4}, {"a": "2024-11-27 20:45:00", "b": 602.6}, {"a": "2024-11-27 20:50:00", "b": 561.8}, {"a": "2024-11-27 20:55:00", "b": 501.4}, {"a": "2024-11-27 21:00:00", "b": 511.4}, {"a": "2024-11-27 21:05:00", "b": 561.6}, {"a": "2024-11-27 21:10:00", "b": 611.0}, {"a": "2024-11-27 21:15:00", "b": 514.8}, {"a": "2024-11-27 21:20:00", "b": 509.4}, {"a": "2024-11-27 21:25:00", "b": 516.2}, {"a": "2024-11-27 21:30:00", "b": 631.8}, {"a": "2024-11-27 21:35:00", "b": 488.0}, {"a": "2024-11-27 21:40:00", "b": 507.8}, {"a": "2024-11-27 21:45:00", "b": 594.0}, {"a": "2024-11-27 21:50:00", "b": 572.2}, {"a": "2024-11-27 21:55:00", "b": 513.2}, {"a": "2024-11-27 22:00:00", "b": 654.2}, {"a": "2024-11-27 22:05:00", "b": 604.2}, {"a": "2024-11-27 22:10:00", "b": 602.8}, {"a": "2024-11-27 22:15:00", "b": 551.4}, {"a": "2024-11-27 22:20:00", "b": 499.8}, {"a": "2024-11-27 22:25:00", "b": 500.8}, {"a": "2024-11-27 22:30:00", "b": 684.6}, {"a": "2024-11-27 22:35:00", "b": 543.4}, {"a": "2024-11-27 22:40:00", "b": 618.0}, {"a": "2024-11-27 22:45:00", "b": 671.75}, {"a": "2024-11-27 22:50:00", "b": 694.8}, {"a": "2024-11-27 22:55:00", "b": 612.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    