
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-18 15:45:00", "b": 439.5}, {"a": "2024-11-18 15:50:00", "b": 595.4}, {"a": "2024-11-18 15:55:00", "b": 630.6}, {"a": "2024-11-18 16:00:00", "b": 662.8}, {"a": "2024-11-18 16:05:00", "b": 694.8}, {"a": "2024-11-18 16:10:00", "b": 724.6}, {"a": "2024-11-18 16:15:00", "b": 737.0}, {"a": "2024-11-18 16:20:00", "b": 754.0}, {"a": "2024-11-18 16:25:00", "b": 782.0}, {"a": "2024-11-18 16:30:00", "b": 800.25}, {"a": "2024-11-18 16:35:00", "b": 817.0}, {"a": "2024-11-18 17:25:00", "b": 557.3333333333334}, {"a": "2024-11-18 17:30:00", "b": 675.2}, {"a": "2024-11-18 17:35:00", "b": 653.4}, {"a": "2024-11-18 17:40:00", "b": 646.0}, {"a": "2024-11-18 17:45:00", "b": 632.2}, {"a": "2024-11-18 17:50:00", "b": 579.2}, {"a": "2024-11-18 17:55:00", "b": 562.5}, {"a": "2024-11-18 18:00:00", "b": 573.6}, {"a": "2024-11-18 18:05:00", "b": 586.5}, {"a": "2024-11-18 18:10:00", "b": 584.6}, {"a": "2024-11-18 18:15:00", "b": 599.0}, {"a": "2024-11-18 18:20:00", "b": 623.2}, {"a": "2024-11-18 18:25:00", "b": 629.4}, {"a": "2024-11-18 18:30:00", "b": 632.6666666666666}, {"a": "2024-11-18 18:35:00", "b": 651.2}, {"a": "2024-11-18 18:40:00", "b": 680.0}, {"a": "2024-11-18 18:45:00", "b": 690.6}, {"a": "2024-11-18 18:50:00", "b": 704.5}, {"a": "2024-11-18 18:55:00", "b": 710.5}, {"a": "2024-11-18 19:00:00", "b": 707.25}, {"a": "2024-11-18 19:05:00", "b": 714.6}, {"a": "2024-11-18 19:10:00", "b": 725.25}, {"a": "2024-11-18 19:15:00", "b": 720.2}, {"a": "2024-11-18 19:20:00", "b": 700.0}, {"a": "2024-11-18 19:25:00", "b": 691.0}, {"a": "2024-11-18 19:30:00", "b": 701.2}, {"a": "2024-11-18 19:35:00", "b": 702.4}, {"a": "2024-11-18 19:40:00", "b": 685.75}, {"a": "2024-11-18 19:45:00", "b": 695.8}, {"a": "2024-11-18 19:50:00", "b": 705.3333333333334}, {"a": "2024-11-18 19:55:00", "b": 706.5}, {"a": "2024-11-18 20:00:00", "b": 697.25}, {"a": "2024-11-18 20:05:00", "b": 713.4}, {"a": "2024-11-18 20:10:00", "b": 723.25}, {"a": "2024-11-18 20:15:00", "b": 733.8}, {"a": "2024-11-18 20:20:00", "b": 766.25}, {"a": "2024-11-18 20:25:00", "b": 768.0}, {"a": "2024-11-18 20:30:00", "b": 746.6}, {"a": "2024-11-18 20:35:00", "b": 744.75}, {"a": "2024-11-18 20:40:00", "b": 759.6}, {"a": "2024-11-18 20:45:00", "b": 756.6666666666666}, {"a": "2024-11-18 20:50:00", "b": 740.2}, {"a": "2024-11-18 20:55:00", "b": 736.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    