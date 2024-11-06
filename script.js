
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-05 23:10:00", "b": 652.0}, {"a": "2024-11-05 23:15:00", "b": 670.2}, {"a": "2024-11-05 23:20:00", "b": 681.75}, {"a": "2024-11-05 23:25:00", "b": 696.6}, {"a": "2024-11-05 23:30:00", "b": 723.2}, {"a": "2024-11-05 23:35:00", "b": 709.8}, {"a": "2024-11-05 23:40:00", "b": 738.75}, {"a": "2024-11-05 23:45:00", "b": 762.2}, {"a": "2024-11-05 23:50:00", "b": 773.5}, {"a": "2024-11-05 23:55:00", "b": 774.0}, {"a": "2024-11-06 00:00:00", "b": 758.2}, {"a": "2024-11-06 00:05:00", "b": 702.0}, {"a": "2024-11-06 00:10:00", "b": 727.6}, {"a": "2024-11-06 00:15:00", "b": 708.2}, {"a": "2024-11-06 00:20:00", "b": 690.75}, {"a": "2024-11-06 00:25:00", "b": 703.0}, {"a": "2024-11-06 00:30:00", "b": 706.4}, {"a": "2024-11-06 00:35:00", "b": 703.3333333333334}, {"a": "2024-11-06 00:40:00", "b": 700.75}, {"a": "2024-11-06 00:45:00", "b": 738.4}, {"a": "2024-11-06 00:50:00", "b": 704.6}, {"a": "2024-11-06 00:55:00", "b": 707.6}, {"a": "2024-11-06 01:00:00", "b": 736.2}, {"a": "2024-11-06 01:05:00", "b": 697.0}, {"a": "2024-11-06 01:10:00", "b": 696.0}, {"a": "2024-11-06 01:15:00", "b": 717.2}, {"a": "2024-11-06 01:20:00", "b": 721.5}, {"a": "2024-11-06 01:25:00", "b": 706.2}, {"a": "2024-11-06 01:30:00", "b": 733.6}, {"a": "2024-11-06 01:35:00", "b": 729.5}, {"a": "2024-11-06 01:40:00", "b": 690.4}, {"a": "2024-11-06 01:45:00", "b": 694.6}, {"a": "2024-11-06 01:50:00", "b": 722.0}, {"a": "2024-11-06 01:55:00", "b": 728.4}, {"a": "2024-11-06 02:00:00", "b": 684.0}, {"a": "2024-11-06 02:05:00", "b": 680.4}, {"a": "2024-11-06 02:10:00", "b": 698.8}, {"a": "2024-11-06 02:15:00", "b": 688.2}, {"a": "2024-11-06 02:20:00", "b": 692.0}, {"a": "2024-11-06 02:25:00", "b": 686.5}, {"a": "2024-11-06 02:30:00", "b": 667.75}, {"a": "2024-11-06 02:35:00", "b": 670.2}, {"a": "2024-11-06 02:40:00", "b": 669.4}, {"a": "2024-11-06 02:45:00", "b": 651.8}, {"a": "2024-11-06 02:50:00", "b": 630.6}, {"a": "2024-11-06 02:55:00", "b": 645.6}, {"a": "2024-11-06 03:00:00", "b": 658.0}, {"a": "2024-11-06 03:05:00", "b": 640.5}, {"a": "2024-11-06 03:10:00", "b": 645.6}, {"a": "2024-11-06 03:15:00", "b": 612.2}, {"a": "2024-11-06 03:20:00", "b": 561.8}, {"a": "2024-11-06 03:25:00", "b": 546.0}, {"a": "2024-11-06 03:30:00", "b": 539.2}, {"a": "2024-11-06 03:35:00", "b": 505.6}, {"a": "2024-11-06 03:40:00", "b": 516.2}, {"a": "2024-11-06 03:45:00", "b": 532.2}, {"a": "2024-11-06 03:50:00", "b": 584.4}, {"a": "2024-11-06 03:55:00", "b": 612.6}, {"a": "2024-11-06 04:00:00", "b": 605.6}, {"a": "2024-11-06 04:05:00", "b": 624.4}, {"a": "2024-11-06 04:10:00", "b": 631.0}, {"a": "2024-11-06 04:15:00", "b": 640.6}, {"a": "2024-11-06 04:20:00", "b": 649.6}, {"a": "2024-11-06 04:25:00", "b": 655.4}, {"a": "2024-11-06 04:30:00", "b": 669.75}, {"a": "2024-11-06 04:35:00", "b": 675.4}, {"a": "2024-11-06 04:40:00", "b": 680.25}, {"a": "2024-11-06 04:45:00", "b": 683.75}, {"a": "2024-11-06 04:50:00", "b": 683.0}, {"a": "2024-11-06 04:55:00", "b": 693.2}, {"a": "2024-11-06 05:00:00", "b": 683.4}, {"a": "2024-11-06 05:05:00", "b": 686.8}, {"a": "2024-11-06 05:10:00", "b": 683.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    