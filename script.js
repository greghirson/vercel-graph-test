
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-08 15:00:00", "b": 551.25}, {"a": "2025-04-08 15:05:00", "b": 541.4}, {"a": "2025-04-08 15:10:00", "b": 525.2}, {"a": "2025-04-08 15:15:00", "b": 509.2}, {"a": "2025-04-08 15:20:00", "b": 512.2}, {"a": "2025-04-08 15:25:00", "b": 522.5}, {"a": "2025-04-08 15:30:00", "b": 520.4}, {"a": "2025-04-08 15:35:00", "b": 512.0}, {"a": "2025-04-08 15:40:00", "b": 511.0}, {"a": "2025-04-08 15:45:00", "b": 508.3333333333333}, {"a": "2025-04-08 15:50:00", "b": 514.25}, {"a": "2025-04-08 15:55:00", "b": 509.25}, {"a": "2025-04-08 16:00:00", "b": 500.8}, {"a": "2025-04-08 16:05:00", "b": 510.0}, {"a": "2025-04-08 16:10:00", "b": 517.8}, {"a": "2025-04-08 16:15:00", "b": 518.6}, {"a": "2025-04-08 16:20:00", "b": 505.8}, {"a": "2025-04-08 16:25:00", "b": 502.4}, {"a": "2025-04-08 16:30:00", "b": 518.5}, {"a": "2025-04-08 16:35:00", "b": 521.5}, {"a": "2025-04-08 16:40:00", "b": 519.5}, {"a": "2025-04-08 16:45:00", "b": 516.4}, {"a": "2025-04-08 16:50:00", "b": 512.25}, {"a": "2025-04-08 16:55:00", "b": 516.25}, {"a": "2025-04-08 17:00:00", "b": 532.25}, {"a": "2025-04-08 17:05:00", "b": 555.2}, {"a": "2025-04-08 17:10:00", "b": 588.0}, {"a": "2025-04-08 17:15:00", "b": 615.6}, {"a": "2025-04-08 17:20:00", "b": 784.2}, {"a": "2025-04-08 17:25:00", "b": 767.2}, {"a": "2025-04-08 17:30:00", "b": 687.8}, {"a": "2025-04-08 17:35:00", "b": 698.8}, {"a": "2025-04-08 17:40:00", "b": 726.0}, {"a": "2025-04-08 17:45:00", "b": 848.6}, {"a": "2025-04-08 17:50:00", "b": 1130.4}, {"a": "2025-04-08 17:55:00", "b": 908.0}, {"a": "2025-04-08 18:00:00", "b": 660.25}, {"a": "2025-04-08 18:05:00", "b": 947.6}, {"a": "2025-04-08 18:10:00", "b": 790.0}, {"a": "2025-04-08 18:15:00", "b": 653.4}, {"a": "2025-04-08 18:20:00", "b": 637.6}, {"a": "2025-04-08 18:25:00", "b": 664.2}, {"a": "2025-04-08 18:30:00", "b": 709.4}, {"a": "2025-04-08 18:35:00", "b": 728.8}, {"a": "2025-04-08 18:40:00", "b": 1889.8}, {"a": "2025-04-08 18:45:00", "b": 1868.4}, {"a": "2025-04-08 18:50:00", "b": 857.4}, {"a": "2025-04-08 18:55:00", "b": 688.4}, {"a": "2025-04-08 19:00:00", "b": 637.0}, {"a": "2025-04-08 19:05:00", "b": 642.6}, {"a": "2025-04-08 19:10:00", "b": 644.0}, {"a": "2025-04-08 19:15:00", "b": 622.6}, {"a": "2025-04-08 19:20:00", "b": 608.0}, {"a": "2025-04-08 19:25:00", "b": 602.0}, {"a": "2025-04-08 19:30:00", "b": 592.0}, {"a": "2025-04-08 19:35:00", "b": 590.5}, {"a": "2025-04-08 19:40:00", "b": 615.25}, {"a": "2025-04-08 19:45:00", "b": 615.8}, {"a": "2025-04-08 19:50:00", "b": 630.4}, {"a": "2025-04-08 19:55:00", "b": 633.4}, {"a": "2025-04-08 20:00:00", "b": 619.2}, {"a": "2025-04-08 20:05:00", "b": 633.2}, {"a": "2025-04-08 20:10:00", "b": 647.6}, {"a": "2025-04-08 20:15:00", "b": 659.4}, {"a": "2025-04-08 20:20:00", "b": 674.25}, {"a": "2025-04-08 20:25:00", "b": 674.6666666666666}, {"a": "2025-04-08 20:30:00", "b": 669.8}, {"a": "2025-04-08 20:35:00", "b": 672.25}, {"a": "2025-04-08 20:40:00", "b": 668.4}, {"a": "2025-04-08 20:45:00", "b": 670.0}, {"a": "2025-04-08 20:50:00", "b": 675.6}, {"a": "2025-04-08 20:55:00", "b": 664.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    