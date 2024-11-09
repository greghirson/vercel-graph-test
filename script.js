
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-08 10:10:00", "b": 767.6}, {"a": "2024-11-08 10:15:00", "b": 758.5}, {"a": "2024-11-08 10:20:00", "b": 743.6}, {"a": "2024-11-08 10:25:00", "b": 741.75}, {"a": "2024-11-08 10:30:00", "b": 745.8}, {"a": "2024-11-08 10:35:00", "b": 736.4}, {"a": "2024-11-08 10:40:00", "b": 729.8}, {"a": "2024-11-08 10:45:00", "b": 719.6}, {"a": "2024-11-08 10:50:00", "b": 719.8}, {"a": "2024-11-08 10:55:00", "b": 707.6}, {"a": "2024-11-08 11:00:00", "b": 712.6}, {"a": "2024-11-08 11:05:00", "b": 708.8}, {"a": "2024-11-08 11:10:00", "b": 729.0}, {"a": "2024-11-08 11:15:00", "b": 715.0}, {"a": "2024-11-08 11:20:00", "b": 704.5}, {"a": "2024-11-08 11:25:00", "b": 686.25}, {"a": "2024-11-08 11:30:00", "b": 666.0}, {"a": "2024-11-08 11:35:00", "b": 672.75}, {"a": "2024-11-08 11:40:00", "b": 680.25}, {"a": "2024-11-08 11:45:00", "b": 656.0}, {"a": "2024-11-08 11:50:00", "b": 630.4}, {"a": "2024-11-08 11:55:00", "b": 616.6}, {"a": "2024-11-08 12:00:00", "b": 608.6666666666666}, {"a": "2024-11-08 12:05:00", "b": 607.75}, {"a": "2024-11-08 12:10:00", "b": 603.8}, {"a": "2024-11-08 12:15:00", "b": 603.6}, {"a": "2024-11-08 12:20:00", "b": 595.75}, {"a": "2024-11-08 12:25:00", "b": 599.4}, {"a": "2024-11-08 12:30:00", "b": 602.3333333333334}, {"a": "2024-11-08 12:35:00", "b": 590.0}, {"a": "2024-11-08 12:40:00", "b": 596.6}, {"a": "2024-11-08 12:45:00", "b": 594.5}, {"a": "2024-11-08 12:50:00", "b": 581.6}, {"a": "2024-11-08 12:55:00", "b": 589.25}, {"a": "2024-11-08 13:00:00", "b": 607.6}, {"a": "2024-11-08 13:05:00", "b": 601.25}, {"a": "2024-11-08 13:10:00", "b": 588.0}, {"a": "2024-11-08 13:15:00", "b": 587.0}, {"a": "2024-11-08 13:20:00", "b": 588.8}, {"a": "2024-11-08 13:25:00", "b": 581.3333333333334}, {"a": "2024-11-08 13:30:00", "b": 585.8}, {"a": "2024-11-08 13:35:00", "b": 579.0}, {"a": "2024-11-08 13:40:00", "b": 576.0}, {"a": "2024-11-08 13:45:00", "b": 579.3333333333334}, {"a": "2024-11-08 13:50:00", "b": 571.0}, {"a": "2024-11-08 13:55:00", "b": 568.5}, {"a": "2024-11-08 14:00:00", "b": 578.2}, {"a": "2024-11-08 14:05:00", "b": 577.0}, {"a": "2024-11-08 14:10:00", "b": 577.4}, {"a": "2024-11-08 14:15:00", "b": 590.4}, {"a": "2024-11-08 14:20:00", "b": 589.0}, {"a": "2024-11-08 14:25:00", "b": 585.0}, {"a": "2024-11-08 14:30:00", "b": 585.75}, {"a": "2024-11-08 14:35:00", "b": 586.75}, {"a": "2024-11-08 14:40:00", "b": 596.0}, {"a": "2024-11-08 14:45:00", "b": 597.8}, {"a": "2024-11-08 14:50:00", "b": 604.2}, {"a": "2024-11-08 14:55:00", "b": 619.4}, {"a": "2024-11-08 15:00:00", "b": 618.25}, {"a": "2024-11-08 15:05:00", "b": 621.25}, {"a": "2024-11-08 15:10:00", "b": 629.6}, {"a": "2024-11-08 15:15:00", "b": 628.0}, {"a": "2024-11-08 15:20:00", "b": 611.6}, {"a": "2024-11-08 15:25:00", "b": 632.25}, {"a": "2024-11-08 15:30:00", "b": 639.8}, {"a": "2024-11-08 15:35:00", "b": 626.0}, {"a": "2024-11-08 15:40:00", "b": 618.25}, {"a": "2024-11-08 15:45:00", "b": 644.0}, {"a": "2024-11-08 15:50:00", "b": 660.5}, {"a": "2024-11-08 15:55:00", "b": 661.0}, {"a": "2024-11-08 16:00:00", "b": 653.75}, {"a": "2024-11-08 16:05:00", "b": 646.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    