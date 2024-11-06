
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-06 01:00:00", "b": 739.75}, {"a": "2024-11-06 01:05:00", "b": 697.0}, {"a": "2024-11-06 01:10:00", "b": 696.0}, {"a": "2024-11-06 01:15:00", "b": 717.2}, {"a": "2024-11-06 01:20:00", "b": 721.5}, {"a": "2024-11-06 01:25:00", "b": 706.2}, {"a": "2024-11-06 01:30:00", "b": 733.6}, {"a": "2024-11-06 01:35:00", "b": 729.5}, {"a": "2024-11-06 01:40:00", "b": 690.4}, {"a": "2024-11-06 01:45:00", "b": 694.6}, {"a": "2024-11-06 01:50:00", "b": 722.0}, {"a": "2024-11-06 01:55:00", "b": 728.4}, {"a": "2024-11-06 02:00:00", "b": 684.0}, {"a": "2024-11-06 02:05:00", "b": 680.4}, {"a": "2024-11-06 02:10:00", "b": 698.8}, {"a": "2024-11-06 02:15:00", "b": 688.2}, {"a": "2024-11-06 02:20:00", "b": 692.0}, {"a": "2024-11-06 02:25:00", "b": 686.5}, {"a": "2024-11-06 02:30:00", "b": 667.75}, {"a": "2024-11-06 02:35:00", "b": 670.2}, {"a": "2024-11-06 02:40:00", "b": 669.4}, {"a": "2024-11-06 02:45:00", "b": 651.8}, {"a": "2024-11-06 02:50:00", "b": 630.6}, {"a": "2024-11-06 02:55:00", "b": 645.6}, {"a": "2024-11-06 03:00:00", "b": 658.0}, {"a": "2024-11-06 03:05:00", "b": 640.5}, {"a": "2024-11-06 03:10:00", "b": 645.6}, {"a": "2024-11-06 03:15:00", "b": 612.2}, {"a": "2024-11-06 03:20:00", "b": 561.8}, {"a": "2024-11-06 03:25:00", "b": 546.0}, {"a": "2024-11-06 03:30:00", "b": 539.2}, {"a": "2024-11-06 03:35:00", "b": 505.6}, {"a": "2024-11-06 03:40:00", "b": 516.2}, {"a": "2024-11-06 03:45:00", "b": 532.2}, {"a": "2024-11-06 03:50:00", "b": 584.4}, {"a": "2024-11-06 03:55:00", "b": 612.6}, {"a": "2024-11-06 04:00:00", "b": 605.6}, {"a": "2024-11-06 04:05:00", "b": 624.4}, {"a": "2024-11-06 04:10:00", "b": 631.0}, {"a": "2024-11-06 04:15:00", "b": 640.6}, {"a": "2024-11-06 04:20:00", "b": 649.6}, {"a": "2024-11-06 04:25:00", "b": 655.4}, {"a": "2024-11-06 04:30:00", "b": 669.75}, {"a": "2024-11-06 04:35:00", "b": 675.4}, {"a": "2024-11-06 04:40:00", "b": 680.25}, {"a": "2024-11-06 04:45:00", "b": 683.75}, {"a": "2024-11-06 04:50:00", "b": 683.0}, {"a": "2024-11-06 04:55:00", "b": 693.2}, {"a": "2024-11-06 05:00:00", "b": 683.4}, {"a": "2024-11-06 05:05:00", "b": 686.8}, {"a": "2024-11-06 05:10:00", "b": 691.8}, {"a": "2024-11-06 05:15:00", "b": 702.2}, {"a": "2024-11-06 05:20:00", "b": 672.8}, {"a": "2024-11-06 05:25:00", "b": 714.8}, {"a": "2024-11-06 05:30:00", "b": 664.4}, {"a": "2024-11-06 05:35:00", "b": 630.6}, {"a": "2024-11-06 05:40:00", "b": 612.5}, {"a": "2024-11-06 05:45:00", "b": 579.8}, {"a": "2024-11-06 05:50:00", "b": 586.0}, {"a": "2024-11-06 05:55:00", "b": 583.4}, {"a": "2024-11-06 06:00:00", "b": 590.75}, {"a": "2024-11-06 06:05:00", "b": 565.8}, {"a": "2024-11-06 06:10:00", "b": 551.2}, {"a": "2024-11-06 06:15:00", "b": 539.2}, {"a": "2024-11-06 06:20:00", "b": 519.0}, {"a": "2024-11-06 06:25:00", "b": 522.4}, {"a": "2024-11-06 06:30:00", "b": 534.25}, {"a": "2024-11-06 06:35:00", "b": 537.2}, {"a": "2024-11-06 06:40:00", "b": 533.8}, {"a": "2024-11-06 06:45:00", "b": 513.8}, {"a": "2024-11-06 06:50:00", "b": 510.0}, {"a": "2024-11-06 06:55:00", "b": 515.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    